import * as React from 'react';
import { Component } from 'react';
import classnames from 'classnames';
import Spin from '../spin';
import { SpinProps } from '../spin/spin';

export interface PageProps {
  wrapClassName?: string;
  wrapStyle?: React.CSSProperties;
}

export interface PageState {}

class Page extends Component<PageProps & SpinProps, PageState> {
  static defaultProps = {
    spinning: false,
  };

  render() {
    const { children, wrapClassName, className, style, ...rest } = this.props;

    return (
      <Spin className={classnames('eh-page-wrap', wrapClassName)} {...rest}>
        <div style={style} className={classnames('eh-page', className)}>
          {children}
        </div>
      </Spin>
    );
  }
}

export default Page;
