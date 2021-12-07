import React, { useEffect, useState } from 'react';
import logo from '@/assets/logo.svg';
import routers from '@/router/index';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
import sideBar from '@/router/router-generator';
import './App.scss';
import Menu from './components/Menus/menu';
import MenuItem from './components/Menus/menuItem';

const App = () => {
  const Element = () => useRoutes(routers);
  const navigate = useNavigate();
  const [tab, setTab] = useState<string>('0');
  const findRoute = (selectedIndex: string) => {
    return sideBar.filter((item) => selectedIndex === item[0])[0][1];
  };

  useEffect(() => {
    if (tab === '0') {
      navigate('');
    }
  }, [navigate, tab]);

  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="icon" alt="logo" />
        <p className="title">
          <span>X</span>bear <span>UI</span>
        </p>
        <Menu
          className="menus"
          mode="horizontal"
          onSelect={(selectedIndex) => {
            setTab(selectedIndex);
            if (selectedIndex === '0') {
              navigate('');
            }
            if (selectedIndex === '1') {
              navigate('/components/icon');
            }
          }}
        >
          <MenuItem>简介</MenuItem>
          <MenuItem>组件</MenuItem>
        </Menu>
      </header>
      {tab === '0' ? (
        <section className="intro site-layout-background">
          <Element />
        </section>
      ) : (
        <>
          <div className="sideBar">
            <Menu
              mode="vertical"
              onSelect={(selectedIndex) => {
                navigate(findRoute(selectedIndex));
              }}
            >
              {sideBar.map((item) => {
                return (
                  <MenuItem key={item[0]} index={item[0]}>
                    {item[2]}
                  </MenuItem>
                );
              })}
            </Menu>
          </div>
          <div className="container">
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                marginBottom: 10,
                minHeight: '83vh',
              }}
            >
              <Element />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
