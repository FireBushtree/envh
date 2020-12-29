import React, { useState } from 'react';
import { Spin, NavBar } from 'envh';

const SpinDemo: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  return (
    <div>
      <Spin>
        <NavBar>nav-bar</NavBar>
      </Spin>

      <div style={{ display: 'flex', height: 50, alignItems: 'center' }}>
        <Spin style={{ flex: 1, fontSize: 18, textAlign: 'center' }}>
          <div>left</div>
        </Spin>
        <Spin style={{ flex: 1, fontSize: 18, textAlign: 'center' }}>
          <div>right</div>
        </Spin>
      </div>

      <div style={{ height: 6, background: '#a0d911' }} />

      <div>
        <button
          type="button"
          onClick={() => {
            setIsSpinning(!isSpinning);
          }}
        >
          {isSpinning ? '关闭' : '开启'}
          spinning
        </button>

        <Spin spinning={isSpinning}>我在spinning</Spin>
      </div>

      <div style={{ height: 6, background: '#a0d911' }} />

      <div>
        <Spin />
        单独使用
      </div>
    </div>
  );
};

export default SpinDemo;
