import * as React from 'react';
import './index.less';
import classnames from 'classnames';
import { Spin } from 'antd';

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  spinning?: boolean;
  fixed?: boolean;
  visible?: boolean;
}

const Page: React.FC<PageProps> = (props) => {
  const { className, children, spinning, fixed, visible, ...rest } = props;

  return (
    <div
      {...rest}
      className={classnames([className, 'eh-page'], {
        'eh-page__fixed': fixed,
        'eh-page__visible': visible,
      })}
    >
      <Spin spinning={spinning}>{children}</Spin>
    </div>
  );
};

Page.defaultProps = {
  spinning: false,
  fixed: false,
  visible: false,
};

export default Page;
