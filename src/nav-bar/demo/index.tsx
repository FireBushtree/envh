import * as React from 'react';
import { Page, NavBar } from 'envh';

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  const handleClick = (message: string) => {
    // eslint-disable-next-line no-alert
    alert(`You clicked ${message} button`);
  };

  return (
    <Page>
      <NavBar
        right={<div style={{ cursor: 'pointer' }}>查询</div>}
        onLeftClick={() => handleClick('left')}
        onRightClick={() => handleClick('right')}
      >
        这是标题
      </NavBar>
    </Page>
  );
};

export default Demo;
