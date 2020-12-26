import React from 'react';
import { Spin, NavBar } from 'envh';

const SpinDemo: React.FC = () => (
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
  </div>
);

export default SpinDemo;
