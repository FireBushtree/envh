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
    <Spin spinning={spinning}>
      <div {...rest} className={classnames(className, { 'eh-page': true })}>
        {children}
      </div>
    </Spin>
  );
};

Page.defaultProps = {
  spinning: false,
};

export default Page;
