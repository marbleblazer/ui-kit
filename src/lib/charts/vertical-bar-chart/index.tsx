import { lazy } from 'react';

const VerticalBarChartComponent = lazy(() => import('./vertical-bar-line-chart'));

export const VerticalBarChart = VerticalBarChartComponent;
