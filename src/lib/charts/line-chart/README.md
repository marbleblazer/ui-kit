# LineChart Component

A customizable line chart component built using [ECharts](https://echarts.apache.org/). This component allows you to visualize data in a clean and interactive line chart with tooltips.

## Installation

Install the required dependencies:

```bash
npm install echarts echarts-for-react
```

## Usage

```tsx
import LineChart from '@chirpwireless/ui-kit';

const data = [
    [0, 5, 10, 15, 20],
    [10, 15, 25, 35, 45],
];

const resolvedTooltipTitle = (data: DataType) => `Title: ${data[0]}`;
const resolvedTooltipSubtitle = (data: DataType) => `Subtitle: ${data[1]}`;

<LineChart
    data={data}
    xAxisName="X Axis"
    yAxisName="Y Axis"
    resolvedTooltipTitle={resolvedTooltipTitle}
    resolvedTooltipSubtitle={resolvedTooltipSubtitle}
/>;
```

## Properties

| Name                      | Description                                                                                | Type                         | Default Value |
| ------------------------- | ------------------------------------------------------------------------------------------ | ---------------------------- | ------------- |
| `data`                    | The data for the chart. Each item is an array of numbers (or strings) representing values. | `DataType[]`                 | -             |
| `xAxisName`               | The label for the X-axis.                                                                  | `string`                     | -             |
| `yAxisName`               | The label for the Y-axis.                                                                  | `string`                     | -             |
| `style`                   | Custom styles for the chart.                                                               | `CSSProperties`              | -             |
| `resolvedTooltipTitle`    | A function to resolve the title for the tooltip.                                           | `(data: DataType) => string` | -             |
| `resolvedTooltipSubtitle` | A function to resolve the subtitle for the tooltip.                                        | `(data: DataType) => string` | -             |

## Features

- **Custom Tooltips**: The tooltip is customizable with dynamic titles and subtitles.
- **Responsive**: The chart can adapt to different screen sizes and custom styles.
- **Theme Aware**: It uses your Material-UI theme for colors and typography to maintain visual consistency across the application.
- **Configurable Axes**: You can configure both the X-axis and Y-axis labels and their appearance.

## Example

### Basic Example

```tsx
import { LineChart } from '@chirpwireless/ui-kit';

const data = [
    [0, 5, 10, 15, 20],
    [10, 15, 25, 35, 45],
];

const resolvedTooltipTitle = (data: DataType) => `X: ${data[0]}`;
const resolvedTooltipSubtitle = (data: DataType) => `Y: ${data[1]}`;

<LineChart
    data={data}
    xAxisName="Time"
    yAxisName="Value"
    resolvedTooltipTitle={resolvedTooltipTitle}
    resolvedTooltipSubtitle={resolvedTooltipSubtitle}
/>;
```

### Custom Tooltip

```tsx
const resolvedTooltipTitle = (data: DataType) => `Data Point: ${data[0]}`;
const resolvedTooltipSubtitle = (data: DataType) => `Value: ${data[1]}`;

<LineChart
    data={data}
    xAxisName="Date"
    yAxisName="Price"
    resolvedTooltipTitle={resolvedTooltipTitle}
    resolvedTooltipSubtitle={resolvedTooltipSubtitle}
/>;
```
