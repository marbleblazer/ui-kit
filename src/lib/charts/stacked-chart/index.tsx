import { lazy } from 'react';

const StackedChartComponent = lazy(() => import('./stacked-line-chart'));

export const StackedChart = StackedChartComponent;
