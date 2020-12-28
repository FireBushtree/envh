import React, { Component, RefObject } from 'react';
import Bscroll, { Options as BetterScrollOptions } from 'better-scroll';
import classnames from 'classnames';
import Spin from '../spin';

export interface ScrollProps {
  betterScrollOptions?: BetterScrollOptions;
  hasRequestText?: boolean;
  requestMore?: boolean;
  isRequestingMore?: boolean;
  pullingUp?: () => any;
}

export interface ScrollState {}

export default class Scroll extends Component<
  ScrollProps & React.HtmlHTMLAttributes<HTMLDivElement>,
  ScrollState
> {
  scroll: Bscroll;

  waitPullingUpCallback: boolean;

  wrapRef: RefObject<HTMLDivElement>;

  static defaultProps = {
    requestMore: true,
    hasRequestText: true,
    isRequestingMore: false,
  };

  constructor(props) {
    super(props);
    this.wrapRef = React.createRef();
  }

  componentDidMount() {
    if (!this.wrapRef.current) {
      return;
    }

    const { betterScrollOptions } = this.props;

    const scroll = new Bscroll(this.wrapRef.current, {
      click: true,
      pullUpLoad: true,
      ...betterScrollOptions,
    });

    this.scroll = scroll;
    this.setPullingUpEvent();
  }

  componentDidUpdate(props) {
    const { children, pullingUp, requestMore } = this.props;

    if (props.children !== children) {
      this.scroll?.refresh();
    }

    if (!this.scroll) {
      return;
    }

    if (props.pullingUp !== pullingUp) {
      this.setPullingUpEvent();
    }

    if (requestMore) {
      this.scroll?.finishPullUp();
    }
  }

  setPullingUpEvent() {
    if (!this.scroll) {
      return;
    }

    const { pullingUp, requestMore } = this.props;

    if (!pullingUp) {
      return;
    }

    const callFunc = async () => {
      if (!requestMore || this.waitPullingUpCallback) {
        return;
      }

      this.waitPullingUpCallback = true;
      await pullingUp();
      this.waitPullingUpCallback = false;
      this.scroll?.finishPullUp();
      this.scroll?.refresh();
    };

    this.scroll.off('pullingUp');
    this.scroll.on('pullingUp', callFunc);
  }

  renderLoadingText() {
    const { requestMore, isRequestingMore } = this.props;

    if (!requestMore) {
      return <div>已加载全部数据</div>;
    }

    if (isRequestingMore) {
      return (
        <div className="eh-scroll-loading-text-wrap">
          <Spin />
          <span className="eh-scroll-loading-text">数据加载中</span>
        </div>
      );
    }

    return <div className="eh-scroll-load-more-text">上拉加载更多数据</div>;
  }

  render() {
    const {
      children,
      className,
      pullingUp,
      isRequestingMore,
      requestMore,
      hasRequestText,
      betterScrollOptions,
      ...rest
    } = this.props;

    return (
      <div className={classnames(className, 'eh-scroll')} ref={this.wrapRef} {...rest}>
        <div>
          {children}

          {hasRequestText && (
            <div className="eh-scroll-loading-container">{this.renderLoadingText()}</div>
          )}
        </div>
      </div>
    );
  }
}
