# Table Component

The `Table` component is designed to display tabular data with customizable features like sorting, expandable rows, and loading states. It supports pagination, sorting, and conditional rendering for empty or loading states.

## Installation

Ensure the necessary dependencies are installed:

```bash
npm install @mui/material @tanstack/react-table @chirp/ui
```

## Usage

### Basic Example

```tsx
import { Table } from '@chirpwireless/ui-kit';

const MyApp = () => {
    const data = [
        /* your data */
    ];
    const columns = [
        {
            header: 'Column 1',
            accessorKey: 'col1',
        },
        {
            header: 'Column 2',
            accessorKey: 'col2',
        },
    ];

    return (
        <Table
            data={data}
            columns={columns}
            isLoading={false}
            enableSorting={true}
            renderEmptyBlock={() => <div>No data available</div>}
        />
    );
};
```

### Table with Expandable Rows

```tsx
import { Table } from '@chirpwireless/ui-kit';

const MyApp = () => {
    const data = [
        /* your data */
    ];
    const columns = [
        { header: 'Column 1', accessorKey: 'col1' },
        { header: 'Column 2', accessorKey: 'col2' },
    ];

    return (
        <Table
            data={data}
            columns={columns}
            renderExpandableBlock={(row) => <div>Expanded row content</div>}
            isLoading={false}
        />
    );
};
```

### Table with Sorting

```tsx
import { Table } from '@chirpwireless/ui-kit';

const MyApp = () => {
    const data = [
        /* your data */
    ];
    const columns = [
        { header: 'Column 1', accessorKey: 'col1', enableSorting: true },
        { header: 'Column 2', accessorKey: 'col2', enableSorting: true },
    ];

    return <Table data={data} columns={columns} enableSorting={true} isLoading={false} />;
};
```

## Props

| Name                    | Description                                                                  | Type                       | Default Value |
| ----------------------- | ---------------------------------------------------------------------------- | -------------------------- | ------------- |
| `data`                  | The array of data to display in the table.                                   | `T[]` (generic type)       | `[]`          |
| `columns`               | The columns configuration. Each column defines the header and data accessor. | `TableColumnDef<T>[]`      | `[]`          |
| `sx`                    | Custom styles for the table wrapper.                                         | `SxProps`                  | `{}`          |
| `isLoading`             | Whether the table is loading data.                                           | `boolean`                  | `false`       |
| `enableSorting`         | Enable sorting for the table.                                                | `boolean`                  | `false`       |
| `defaultSorting`        | Initial sorting state.                                                       | `SortingState`             | `[]`          |
| `expandedRowIndex`      | The index of the expanded row.                                               | `number` or `null`         | `null`        |
| `onRowClick`            | Callback for row click events.                                               | `(row: T) => void`         | `undefined`   |
| `renderEmptyBlock`      | Custom render function for when the table has no data.                       | `() => ReactElement`       | `undefined`   |
| `renderExpandableBlock` | Custom render function for expandable row content.                           | `(row: T) => ReactElement` | `undefined`   |
| `page`                  | The current page (for pagination purposes).                                  | `number`                   | `undefined`   |

## Features

- **Sorting**: Columns can be sorted by clicking on the header. Sorting direction is shown with up or down caret icons.
- **Expandable Rows**: Rows can be expanded to display additional content.
- **Loading State**: A skeleton loader is shown when `isLoading` is true.
- **Empty State**: Custom empty state content is shown when there is no data in the table.
- **Custom Row Click**: A custom handler can be provided for row click actions.

## Customization

- **Column Sorting**: Sorting can be enabled by setting `enableSorting` to true and configuring the columns with sorting capabilities.
- **Expandable Block**: Customize what content to show in an expandable row by passing a `renderExpandableBlock` function.
- **Empty Block**: Customize the empty state by passing a `renderEmptyBlock` function.

## Notes

- The component works with `@tanstack/react-table` for managing the table state and features like sorting.
- Ensure that your `columns` configuration includes the `accessorKey` and optionally `enableSorting` for each column.
- Pagination and row expansion are controlled via `page` and `expandedRowIndex` respectively.

# TableVirtualized Component

The `TableVirtualized` component is a virtualized table that efficiently renders large datasets by only rendering the visible rows. It supports features like sorting, expandable rows, and a loading state, similar to the regular `Table` component, but with enhanced performance for large datasets.

## Installation

Ensure the necessary dependencies are installed:

```bash
npm install @mui/material @tanstack/react-table @chirp/ui @tanstack/react-virtual
```

## Usage

### Basic Example

```tsx
import { TableVirtualized } from '@chirpwireless/ui-kit';

const MyApp = () => {
    const data = [
        /* your data */
    ];
    const columns = [
        { header: 'Column 1', accessorKey: 'col1' },
        { header: 'Column 2', accessorKey: 'col2' },
    ];

    return (
        <TableVirtualized
            data={data}
            columns={columns}
            isLoading={false}
            hasNextPage={true}
            enableSorting={true}
            renderEmptyBlock={() => <div>No data available</div>}
            onBottomReached={() => console.log('Bottom reached')}
        />
    );
};
```

### Table with Expandable Rows

```tsx
import { TableVirtualized } from '@chirpwireless/ui-kit';

const MyApp = () => {
    const data = [
        /* your data */
    ];
    const columns = [
        { header: 'Column 1', accessorKey: 'col1' },
        { header: 'Column 2', accessorKey: 'col2' },
    ];

    return (
        <TableVirtualized
            data={data}
            columns={columns}
            renderExpandableBlock={(row) => <div>Expanded row content</div>}
            isLoading={false}
            hasNextPage={true}
        />
    );
};
```

### Table with Sorting

```tsx
import { TableVirtualized } from '@chirpwireless/ui-kit';

const MyApp = () => {
    const data = [
        /* your data */
    ];
    const columns = [
        { header: 'Column 1', accessorKey: 'col1', enableSorting: true },
        { header: 'Column 2', accessorKey: 'col2', enableSorting: true },
    ];

    return <TableVirtualized data={data} columns={columns} enableSorting={true} isLoading={false} hasNextPage={true} />;
};
```

## Props

| Name                    | Description                                                                  | Type                       | Default Value |
| ----------------------- | ---------------------------------------------------------------------------- | -------------------------- | ------------- |
| `data`                  | The array of data to display in the table.                                   | `T[]` (generic type)       | `[]`          |
| `columns`               | The columns configuration. Each column defines the header and data accessor. | `TableColumnDef<T>[]`      | `[]`          |
| `sx`                    | Custom styles for the table wrapper.                                         | `SxProps`                  | `{}`          |
| `isLoading`             | Whether the table is loading data.                                           | `boolean`                  | `false`       |
| `enableSorting`         | Enable sorting for the table.                                                | `boolean`                  | `false`       |
| `defaultSorting`        | Initial sorting state.                                                       | `SortingState`             | `[]`          |
| `expandedRowIndex`      | The index of the expanded row.                                               | `number` or `null`         | `null`        |
| `hasNextPage`           | Whether there is another page of data to load.                               | `boolean`                  | `false`       |
| `estimateSize`          | Estimate of the row size for virtualization.                                 | `number`                   | `40`          |
| `onBottomReached`       | Callback when the bottom of the table is reached for infinite scroll.        | `() => void`               | `undefined`   |
| `onRowClick`            | Callback for row click events.                                               | `(row: T) => void`         | `undefined`   |
| `renderEmptyBlock`      | Custom render function for when the table has no data.                       | `() => ReactElement`       | `undefined`   |
| `renderExpandableBlock` | Custom render function for expandable row content.                           | `(row: T) => ReactElement` | `undefined`   |

## Features

- **Virtualization**: Only the visible rows are rendered, improving performance when dealing with large datasets.
- **Infinite Scroll**: The table can load more data when the user scrolls to the bottom, triggered by the `onBottomReached` callback.
- **Sorting**: Columns can be sorted by clicking on the header. Sorting direction is shown with up or down caret icons.
- **Expandable Rows**: Rows can be expanded to display additional content.
- **Loading State**: A skeleton loader is shown when `isLoading` is true.
- **Empty State**: Custom empty state content is shown when there is no data in the table.
- **Custom Row Click**: A custom handler can be provided for row click actions.

## Customization

- **Virtualization**: Control the size of each row with the `estimateSize` prop and ensure efficient rendering of large datasets.
- **Infinite Scroll**: Trigger loading of additional data when reaching the bottom of the table with `onBottomReached`.
- **Column Sorting**: Sorting can be enabled by setting `enableSorting` to true and configuring the columns with sorting capabilities.
- **Expandable Block**: Customize what content to show in an expandable row by passing a `renderExpandableBlock` function.
- **Empty Block**: Customize the empty state by passing a `renderEmptyBlock` function.

## Notes

- The component works with `@tanstack/react-table` for managing the table state and features like sorting.
- Ensure that your `columns` configuration includes the `accessorKey` and optionally `enableSorting` for each column.
- Virtualization helps to manage large datasets by rendering only visible rows, which significantly improves performance.
