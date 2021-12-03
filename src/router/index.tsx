import React from 'react';
import { RouteObject } from 'react-router';
import Home from '@/pages/Home/index';
import NoMatch from '@/pages/404/index';
import Button from '@/pages/Button/index';
import Card from '@/pages/Card/index';
import Icon from '@/pages/Icon';
import Message from '@/pages/Message';

const routes: RouteObject[] = [
  { path: '/', element: <Home />, index: true },
  {
    path: '/components',
    children: [
      { path: 'Icon', element: <Icon />, index: true },
      { path: 'Card', element: <Card /> },
      { path: 'Button', element: <Button /> },
      { path: 'Message', element: <Message /> },
    ],
  },
  { path: '*', element: <NoMatch /> },
];

export default routes;
