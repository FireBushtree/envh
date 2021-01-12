import * as React from 'react';
import { Component } from 'react';
import classnames from 'classnames';
import Spin from '../spin';
import { SpinProps } from '../spin/spin';

export interface PageProps {
  wrapClassName?: string;
  wrapStyle?: React.CSSProperties;
  fixed?: boolean;
  visible?: boolean;
}

export interface PageState {
  height: number;
}

class Page extends Component<PageProps & SpinProps, PageState> {
  resizePageBind: (e) => any;

  static defaultProps = {
    spinning: false,
    fixed: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
    this.resizePageBind = this.resizePage.bind(this);
  }

  componentDidMount() {
    this.resizePage();

    window.addEventListener('resize', this.resizePageBind);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizePageBind);
  }

  resizePage() {
    this.setState({ height: window.innerHeight });
  }

  render() {
    const { height } = this.state;
    const { children, wrapClassName, className, style, fixed, visible, ...rest } = this.props;

    return (
      <Spin
        className={classnames('eh-page-wrap', wrapClassName, {
          'eh-page-wrap__fixed': fixed,
          'eh-page-wrap__visible': visible,
        })}
        {...rest}
      >
        <div style={{ height, ...style }} className={classnames('eh-page', className)}>
          {children}
        </div>
      </Spin>
    );
  }
}

export default Page;
