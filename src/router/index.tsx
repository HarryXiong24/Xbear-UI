import React from 'react';
import { RouteObject } from 'react-router';
import Home from '@/pages/Home/index';
import NoMatch from '@/pages/404/index';
import Button from '@/pages/Button/index';
import Card from '@/pages/Card/index';
import Icon from '@/pages/Icon';

const routes: RouteObject[] = [
  { path: '/', element: <Home />, index: true },
  {
    path: '/components',
    children: [
      { path: 'button', element: <Button />, index: true },
      { path: 'card', element: <Card /> },
      { path: 'icon', element: <Icon /> },
    ],
  },
  { path: '*', element: <NoMatch /> },
];

export default routes;
