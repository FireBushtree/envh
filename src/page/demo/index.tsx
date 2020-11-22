import React from 'react';
import { Page } from 'envh';
import { Button } from 'antd';

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  const [loading, setLoading] = React.useState(false);
  const [showFixedPage, setShowFixedPage] = React.useState(false);

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

      <Button type="primary" onClick={handleMockLoading}>
        发送请求，设置页面加载状态
      </Button>

      <Button onClick={() => setShowFixedPage(true)} style={{ marginTop: 20 }} type="primary">
        点击弹出 position: fixed 的 page
      </Button>

      <Page style={{ background: '#fff' }} fixed visible={showFixedPage}>
        我是固定布局的容器， 我会从右边弹出来
        <Button onClick={() => setShowFixedPage(false)}>点击我隐藏此布局</Button>
      </Page>
    </Page>
  );
};

export default Demo;
