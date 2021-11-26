import React from 'react';
import { RouteObject } from 'react-router';
import Home from '@/pages/Home/index';
import Button from '@/pages/Button/index';
import Card from '@/pages/Card/index';
import NoMatch from '@/pages/404/index';

const routes: RouteObject[] = [
  { path: '/', element: <Home />, index: true },
  {
    path: '/components',
    children: [
      { path: 'button', element: <Button />, index: true },
      { path: 'card', element: <Card /> },
    ],
  },
  { path: '*', element: <NoMatch /> },
];

export default routes;
