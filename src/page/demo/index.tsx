import React from 'react';
import { Page } from 'envh';
import { Button } from 'antd';

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  const [loading, setLoading] = React.useState(false);
  const handleMockLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Page spinning={loading} style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '20%', left: '0', right: '0', margin: '0 auto' }}>
        这是page组件， 会自动撑满屏幕
      </div>

      <Button type="primary" onClick={handleMockLoading}>发送请求，设置页面加载状态</Button>
    </Page>
  );
};

export default Demo;
