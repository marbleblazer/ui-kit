import { SxProps } from '@mui/material';
import { SortingState } from '@tanstack/react-table';
import { ReactElement } from 'react';

import { TableComponent } from './components/table-component';
import { useReactTable } from './hooks/use-react-table';
import { TableColumnDef } from './types';

export interface ITableContainerProps<T> {
    data: T[];
    columns: TableColumnDef<T>[];
    sx?: SxProps;
    isLoading?: boolean;
    enableSorting?: boolean;
    defaultSorting?: SortingState;
    expandedRowIndex?: number;
    page?: number;

    onRowClick?(row: T): void;
    onRowDoubleClick?(row: T): void;
    renderEmptyBlock?(): ReactElement;
    renderExpandableBlock?(row: T): ReactElement;
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
    onRowDoubleClick,
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
            onRowDoubleClick={onRowDoubleClick}
            renderExpandableBlock={renderExpandableBlock}
            renderEmptyBlock={renderEmptyBlock}
        />
    );
};
