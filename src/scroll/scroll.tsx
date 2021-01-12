import React, { Component } from 'react';
import Bscroll, { Options as BetterScrollOptions } from 'better-scroll';
import classnames from 'classnames';
import Spin from '../spin';

export interface ScrollProps {
  betterScrollOptions?: BetterScrollOptions;
  hasRequestText?: boolean; // 是否有加载文字
  requestDone?: boolean; // 是否加载全部数据
  pullup?: () => any;
  pulldown?: () => any;
}

export interface ScrollState {}

export default class Scroll extends Component<
  ScrollProps & React.HtmlHTMLAttributes<HTMLDivElement>,
  ScrollState
> {
  scroll: Bscroll;

  waitPullingUpCallback: boolean;

  wrapRef: HTMLDivElement;

  static defaultProps = {
    requestDone: false,
    hasRequestText: true,
  };

  componentDidMount() {
    this.initScroll();
  }

  componentDidUpdate(props) {
    const { children } = this.props;

    if (props.children !== children) {
      this.scroll?.refresh();
    }
  }

  initScroll() {
    if (!this.wrapRef) {
      return;
    }

    const { betterScrollOptions, pullup, pulldown } = this.props;

    const scroll = new Bscroll(this.wrapRef, {
      click: true,
      pullUpLoad: true,
      ...betterScrollOptions,
    });

    this.scroll = scroll;

    // 是否派发滚动到底部事件，用于上拉加载
    if (pullup) {
      this.scroll.on('scrollEnd', () => {
        // 滚动到底部
        if (this.scroll.y <= this.scroll.maxScrollY + 50) {
          pullup();
        }
      });
    }

    // 是否派发顶部下拉事件，用于下拉刷新
    if (pulldown) {
      this.scroll.on('touchend', (pos) => {
        // 下拉动作
        if (pos.y > 50) {
          pulldown();
        }
      });
    }
  }

  renderLoadingText() {
    const { requestDone } = this.props;

    if (requestDone) {
      return (
        <div className="eh-scroll-loading__done">
          <span className="eh-scroll-loading__done-text">我已经到底了</span>
        </div>
      );
    }

    return <Spin />;
  }

  render() {
    const {
      children,
      className,
      pullup,
      pulldown,
      hasRequestText,
      requestDone,
      betterScrollOptions,
      ...rest
    } = this.props;

    return (
      <div
        className={classnames(className, 'eh-scroll')}
        ref={(ref) => {
          this.wrapRef = ref;
        }}
        {...rest}
      >
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
