import { SxProps } from '@mui/material';
import { SortingState } from '@tanstack/react-table';
import { ReactElement } from 'react';

import { Table } from './components/Table';
import { useReactTable } from './hooks/useReactTable';
import { TableColumnDef } from './types';

export type Props<TData> = {
    data: TData[];
    columns: TableColumnDef<TData>[];
    sx?: SxProps;
    isLoading?: boolean;
    enableSorting?: boolean;
    defaultSorting?: SortingState;
    expandedRowIndex?: number;
    onRowClick?(row: TData): void;
    renderEmptyBlock?(): ReactElement;
    renderExpandableBlock?(row: TData): ReactElement;
    page?: number;
};

const TableContainer = <TData,>({
    data,
    columns,
    sx = {},
    isLoading,
    enableSorting,
    defaultSorting,
    expandedRowIndex,
    onRowClick,
    renderExpandableBlock,
    renderEmptyBlock,
    page,
}: Props<TData>) => {
    const { table, rows } = useReactTable({
        data,
        columns,
        enableSorting,
        defaultSorting,
    });

    return (
        <Table
            table={table}
            rows={rows}
            sx={{
                ...sx,
                cursor: onRowClick || renderExpandableBlock ? 'pointer' : 'default',
                // overflowX: { xs: 'hidden' },
            }}
            isLoading={isLoading}
            enableSorting={enableSorting}
            page={page}
            expandedRowIndex={expandedRowIndex}
            onRowClick={onRowClick}
            renderExpandableBlock={renderExpandableBlock}
            renderEmptyBlock={renderEmptyBlock}
        />
    );
};

export { TableContainer as Table };
