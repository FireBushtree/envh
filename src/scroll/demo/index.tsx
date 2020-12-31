import React, { useEffect, useState } from 'react';
import { Scroll, Page, NavBar } from 'envh';

const ScrollDemo: React.FC = () => {
  const [list, setList] = useState<Array<number>>([]);
  const [loading, setLoading] = useState(false);

  const addList = async () => {
    setLoading(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        const newList = new Array(10).fill(Math.random());
        setList([...list, ...newList]);
        resolve(newList);
      }, 1000);
    });

    setLoading(false);
  };

  useEffect(() => {
    addList();
  }, []);

  return (
    <Page style={{ display: 'flex', flexDirection: 'column' }}>
      <NavBar>滚动演示</NavBar>
      <div style={{ flex: 1, fontSize: 14, overflow: 'hidden' }}>
        <Scroll
          pullingUp={() => {
            addList();
          }}
          isRequestingMore={loading}
          style={{ height: '100%', overflow: 'hidden' }}
        >
          {list.map((item, index) => (
            <div style={{ padding: '10px' }} key={index}>
              你好-
              {index}
            </div>
          ))}
        </Scroll>
      </div>
    </Page>
  );
};

export default ScrollDemo;
