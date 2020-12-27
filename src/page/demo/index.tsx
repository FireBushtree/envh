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

  const [showTrashPicker, setShowTrashPicker] = useState(false);
  const [trashPickerLoading, setTrashPickerLoading] = useState(false);

  const [showNextPage, setShowNextPage] = useState(false);

  const trashTypes = ['有害垃圾', '厨余垃圾', '其他垃圾', '可回收垃圾'];
  const [currentTrash, setCurrentTrash] = useState('');

  return (
    <Page spinning={isSubmitting} style={wrapStyle}>
      <NavBar left={null}>欢迎光临</NavBar>
      <div style={{ flex: 1, fontSize: 16 }}>
        <div>
          <button
            type="button"
            onClick={() => {
              setShowTrashPicker(true);
            }}
          >
            点击我选择垃圾类型
          </button>
        </div>
      </div>

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

      <Page spinning={trashPickerLoading} fixed visible={showTrashPicker}>
        <NavBar
          onLeftClick={() => {
            setShowTrashPicker(false);
          }}
        >
          选择垃圾类型
        </NavBar>
        {trashTypes.map((item) => (
          <button
            type="button"
            onClick={() => {
              setTrashPickerLoading(true);
              setTimeout(() => {
                setTrashPickerLoading(false);
                setShowNextPage(true);
                setCurrentTrash(item);
              }, 1500);
            }}
            key={item}
          >
            {item}
          </button>
        ))}
      </Page>

      <Page fixed visible={showNextPage}>
        <NavBar
          onClick={() => {
            setCurrentTrash('');
            setShowNextPage(false);
          }}
        >
          另外一个套娃页面
        </NavBar>
        <div style={{ fontSize: 12 }}>
          刚刚选择的是
          {currentTrash}
        </div>
      </Page>
    </Page>
  );
};

export default PageDemo;
