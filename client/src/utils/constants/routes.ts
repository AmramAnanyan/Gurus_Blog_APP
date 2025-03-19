import { lazy } from 'react';
import { LazyExoticComponent } from 'react';

export type RouteType = {
  path: string;
  component: LazyExoticComponent<any>;
  props: any;
  isPrivate: boolean;
};
export const HARD_CODE_ROUTES: Array<RouteType> = [
  {
    path: '/',
    props: null,
    component: lazy(() => import('pages/Home')),
    isPrivate: false,
  },
];
