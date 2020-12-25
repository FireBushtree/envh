import React from 'react';
import { Spin, NavBar } from 'envh';

const SpinDemo: React.FC = () => (
  <div>
    <Spin>
      <NavBar>nav-bar</NavBar>
    </Spin>

    <Spin>
      <div>nav-bar</div>
    </Spin>
  </div>
);

export default SpinDemo;
