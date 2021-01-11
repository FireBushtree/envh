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

export interface PageState {}

class Page extends Component<PageProps & SpinProps, PageState> {
  static defaultProps = {
    spinning: false,
    fixed: false,
  };

  render() {
    const { children, wrapClassName, className, style, fixed, visible, ...rest } = this.props;

    return (
      <Spin
        className={classnames('eh-page-wrap', wrapClassName, {
          'eh-page-wrap__fixed': fixed,
          'eh-page-wrap__visible': visible,
        })}
        {...rest}
      >
        <div
          style={{ height: window.innerHeight, ...style }}
          className={classnames('eh-page', className)}
        >
          {children}
        </div>
      </Spin>
    );
  }
}

export default Page;
