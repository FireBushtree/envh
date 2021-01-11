import React, { useEffect, useState } from 'react';
import { Scroll, Page, NavBar } from 'envh';

class User {
  key: number;

  name: string;

  age: number;

  address: string;

  constructor(key: number) {
    this.key = key;
    this.name = `葡萄${key}`;
    this.age = Math.floor(20 + Math.random() * 5);
    this.address = `西湖区湖底公园${key}号`;
  }
}

const requestUser = (page) =>
  new Promise<Array<User>>((resolve) => {
    setTimeout(() => {
      const users = [];
      const initPage = 5 * page;
      for (let i = initPage; i < initPage + 20; i += 1) {
        users.push(new User(i));
      }

      resolve(users);
    }, 1000);
  });

const ScrollDemo: React.FC = () => {
  // eslint-disable-next-line prefer-const
  let [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = React.useState<Array<User>>([]);

  const requestDone = dataSource.length >= 50;

  useEffect(() => {
    if (requestDone) {
      return;
    }

    (async () => {
      setLoading(true);
      const res = await requestUser(page);
      setLoading(false);
      const newDataSource = [...dataSource, ...res];
      setDataSource(newDataSource);
    })();
  }, [page]);

  return (
    <Page style={{ display: 'flex', flexDirection: 'column' }}>
      <NavBar>滚动演示</NavBar>
      <div style={{ flex: 1, fontSize: 14, overflow: 'hidden' }}>
        <Scroll
          pullup={() => {
            setPage((page += 1));
          }}
          requestDone={requestDone}
          isRequestingMore={loading}
        >
          {dataSource.map((item, index) => (
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
