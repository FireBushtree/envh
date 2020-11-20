import * as React from 'react';
import './index.less';
import classnames from 'classnames';
import { Spin } from 'antd';

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  spinning?: boolean;
}

const Page: React.FC<PageProps> = (props) => {
  const { className, children, spinning, ...rest } = props;

  return (
    <div {...rest} className={classnames(className, { 'eh-page': true })}>
      <Spin spinning={spinning}>{children}</Spin>
    </div>
  );
};

Page.defaultProps = {
  spinning: false,
};

export default Page;
