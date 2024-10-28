import { lazy } from 'react';

const DonutChartComponent = lazy(() => import('./donut-chart'));

export const DonutChart = DonutChartComponent;
