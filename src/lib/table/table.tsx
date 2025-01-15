import { SxProps } from '@mui/material';
import { SortingState } from '@tanstack/react-table';
import { ReactElement } from 'react';

import { TableComponent } from './components/table-component';
import { useReactTable } from './hooks/useReactTable';
import { TableColumnDef } from './types';

export interface ITableContainerProps<T> {
    data: T[];
    columns: TableColumnDef<T>[];
    sx?: SxProps;
    isLoading?: boolean;
    enableSorting?: boolean;
    defaultSorting?: SortingState;
    expandedRowIndex?: number;
    onRowClick?(row: T): void;
    renderEmptyBlock?(): ReactElement;
    renderExpandableBlock?(row: T): ReactElement;
    page?: number;
}

export const Table = <T,>({
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
}: ITableContainerProps<T>) => {
    const { table, rows } = useReactTable({
        data,
        columns,
        enableSorting,
        defaultSorting,
    });

    return (
        <TableComponent
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
