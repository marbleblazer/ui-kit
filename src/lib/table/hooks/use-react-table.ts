import {
    SortingState,
    getCoreRowModel,
    getGroupedRowModel,
    getSortedRowModel,
    useReactTable as useTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import { TableColumnDef } from '../types';

type Props<TData> = {
    data: TData[];
    columns: TableColumnDef<TData>[];
    enableSorting?: boolean;
    defaultSorting?: SortingState;
};

const getColumnId = <TData>(column: TableColumnDef<TData>) =>
    'accessorKey' in column && column.accessorKey ? column.accessorKey : column.header || column.id;

const getRowId = <TData>(row: TData, index: number) =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    'id' in row ? (row.id as string) : 'timestamp' in row ? (row.timestamp as string) : index.toString();

export const useReactTable = <TData>({ data, columns, enableSorting = false, defaultSorting = [] }: Props<TData>) => {
    const [sorting, setSorting] = useState<SortingState>(defaultSorting);

    const table = useTable({
        data,
        columns,
        state: {
            sorting,
        },
        initialState: {
            columnVisibility: columns.reduce((acc, col) => {
                const columnId = getColumnId(col);

                return col.meta?.isVisible === false && columnId ? { ...acc, [columnId]: false } : acc;
            }, {}),
            grouping: columns.filter((col) => col.meta?.isGrouping).map((col) => (getColumnId(col) as string) ?? ''),
        },
        enableSorting,
        getRowId,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getGroupedRowModel: getGroupedRowModel(),
    });

    return {
        table,
        rows: table.getRowModel().rows,
    };
};
