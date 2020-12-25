import * as React from 'react';
import { Component } from 'react';

export interface PageProps {}

export interface PageState {}

class Page extends Component<PageProps, PageState> {
  render() {
    const { children } = this.props;

    return <div className="eh-page">{children}</div>;
  }
}

export default Page;
