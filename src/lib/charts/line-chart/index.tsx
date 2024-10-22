import { lazy } from 'react';

const LineChartComponent = lazy(() => import('./line-line-chart'));

export const LineChart = LineChartComponent;
