import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Information = Loadable(lazy(() => import('../views/dashboard/Information')));

const Stocks = Loadable(lazy(() => import('../views/utilities/Stocks')));
const Board = Loadable(lazy(() => import('../views/utilities/Board')));
const BoardByOne = Loadable(lazy(() => import('../views/utilities/BoardByOne')));
const BoardsWrite = Loadable(lazy(() => import('../views/utilities/BoardsWrite')));
const BoardUpdate = Loadable(lazy(() => import('../views/utilities/BoardUpdate')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const Todo = Loadable(lazy(() => import('../views/utilities/Todo')));
const TodoWrite = Loadable(lazy(() => import('../views/utilities/TodoWrite')));
const FoodRecommend = Loadable(lazy(() => import('../views/FoodRecommend')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/information" /> },
      { path: '/information', exact: true, element: <Information /> },

      { path: '/stocks', exact: true, element: <Stocks /> },
      { path: '/map', exact: true, element: <FoodRecommend /> },
      { path: '/boards', exact: true, element: <Board /> },
      { path: '/boards/write', exact: true, element: <BoardsWrite /> },
      { path: '/boards/update/*', exact: true, element: <BoardUpdate /> },
      { path: '/boards/*', exact: true, element: <BoardByOne /> },
      { path: '/todo', exact: true, element: <Todo /> },
      { path: '/todo/write', exact: true, element: <TodoWrite /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
