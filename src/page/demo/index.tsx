import React, { useState } from 'react';
import { Page, NavBar } from 'envh';

const wrapStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

const buttonStyle: React.CSSProperties = {
  width: '100vw',
  height: '40px',
  lineHeight: '40px',
  textAlign: 'center',
  background: '#4a88ee',
  fontSize: 12,
  color: '#fff',
};

const PageDemo: React.FC = () => {
  const [isSubmitting, setIsSubmittion] = useState(false);

  return (
    <Page spinning={isSubmitting} style={wrapStyle}>
      <NavBar>欢迎光临</NavBar>

      <div style={{ flex: 1 }}>content</div>

      <div
        style={buttonStyle}
        onClick={() => {
          setIsSubmittion(true);
          setTimeout(() => {
            setIsSubmittion(false);
          }, 1500);
        }}
      >
        我是一个提交按钮
      </div>
    </Page>
  );
};

export default PageDemo;
