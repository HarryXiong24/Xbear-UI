import React, { lazy } from 'react';
import { RouteObject } from 'react-router';
import Home from '@/pages/Home/index';
import NoMatch from '@/pages/404/index';
import Button from '@/pages/Button';
import Card from '@/pages/Card';
import Icon from '@/pages/Icon';
import Message from '@/pages/Message';
import Tabs from '@/pages/Tabs';
import Menus from '@/pages/Menus';

// const Button = lazy(() => import('@/pages/Button'));
// const Card = lazy(() => import('@/pages/Card'));
// const Icon = lazy(() => import('@/pages/Icon'));
// const Message = lazy(() => import('@/pages/Message'));
// const Tabs = lazy(() => import('@/pages/Tabs'));

const routes: RouteObject[] = [
  { path: '/', element: <Home />, index: true },
  {
    path: '/components',
    children: [
      { path: 'Icon', element: <Icon />, index: true },
      { path: 'Card', element: <Card /> },
      { path: 'Button', element: <Button /> },
      { path: 'Message', element: <Message /> },
      { path: 'Tabs', element: <Tabs /> },
      { path: 'Menus', element: <Menus /> },
    ],
  },
  { path: '*', element: <NoMatch /> },
];

export default routes;
