import { Fragment, ReactElement, useEffect, useMemo, useState } from 'react';
import { Row as RowType, Table as TableType } from '@tanstack/react-table';
import { SxProps, Table as MuiTable, TableBody } from '@mui/material';

import { EmptyFallback } from '@chirp/ui/lib/empty-fallback';

import { TableColumn } from '../../types';
import { SkeletonRows } from '../skeleton-rows';
import { TableHead } from '../table-head';
import { TableRow } from '../table-row';
import * as S from './style';

type Row<TData> = RowType<TData> & {
    isExpanded?: boolean;
    sx?: SxProps;
};

type Props<TData> = {
    table: TableType<TData>;
    rows: Row<TData>[];
    sx?: SxProps;
    page?: number;
    isLoading?: boolean;
    enableSorting?: boolean;
    expandedRowIndex?: number;
    isVirtualized?: boolean;
    tableSx?: SxProps;
    headerSx?: SxProps;

    onRowClick?(row: TData): void;
    onRowDoubleClick?(row: TData): void;
    renderExpandableBlock?(row: TData): ReactElement;
    renderEmptyBlock?(): ReactElement;
    onScroll?: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
    ref?: React.RefObject<HTMLDivElement | null>;
};

export const TableComponent = <TData,>({
    table,
    rows: allRows,
    sx = {},
    page,
    isLoading,
    headerSx,
    enableSorting = false,
    expandedRowIndex: defaultExpandedRowIndex,
    onRowClick,
    onRowDoubleClick,
    tableSx,
    renderExpandableBlock,
    renderEmptyBlock = () => <EmptyFallback />,
    onScroll,
    ref,
}: Props<TData>) => {
    const columns = table.getVisibleFlatColumns() as TableColumn<TData>[];

    const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(defaultExpandedRowIndex ?? null);

    const rows = useMemo(
        () =>
            allRows.map((row) => ({
                ...row,
                isExpanded: expandedRowIndex === row.index,
                subRows: row.subRows.map((subRow) => ({ ...subRow, isExpanded: expandedRowIndex === subRow.index })),
            })),
        [allRows, expandedRowIndex],
    );

    const handleRowClick = (row: Row<TData>) => {
        onRowClick?.(row.original);
        setExpandedRowIndex(expandedRowIndex === row.index ? null : row.index);
    };

    const handleDoubleClick = (row: Row<TData>) => {
        onRowDoubleClick?.(row.original);
    };

    useEffect(() => {
        setExpandedRowIndex(null);
    }, [page]);

    useEffect(() => {
        if (defaultExpandedRowIndex !== undefined) {
            setExpandedRowIndex(defaultExpandedRowIndex);
        }
    }, [defaultExpandedRowIndex]);

    return (
        <S.TableWrapper
            ref={ref}
            sx={{
                ...sx,
                overflowY: 'auto',
                height: '100%',
            }}
            onScroll={onScroll}
        >
            {rows.length === 0 && isLoading === false && renderEmptyBlock ? (
                renderEmptyBlock()
            ) : (
                <MuiTable stickyHeader sx={{ paddingRight: '12px', ...tableSx }}>
                    {isLoading ? (
                        <SkeletonRows columns={columns} />
                    ) : (
                        <>
                            <TableHead
                                columns={columns}
                                enableSorting={enableSorting}
                                sortingState={table.getState().sorting}
                                headerSx={headerSx}
                            />
                            <TableBody>
                                {rows.map((row) =>
                                    row.subRows.length ? (
                                        <Fragment key={`${row.id}_${row.index}`}>
                                            <S.GroupedRow>
                                                <S.Cell>{row.groupingValue as string}</S.Cell>
                                            </S.GroupedRow>
                                            {row.subRows.map((subRow: Row<TData>) => (
                                                <TableRow
                                                    key={`${subRow.id}_${subRow.index}`}
                                                    row={subRow}
                                                    table={table}
                                                    isExpanded={subRow.isExpanded}
                                                    onDoubleClick={handleDoubleClick}
                                                    onClick={handleRowClick}
                                                    renderExpandableBlock={renderExpandableBlock}
                                                />
                                            ))}
                                        </Fragment>
                                    ) : (
                                        <TableRow
                                            key={`${row.id}_${row.index}`}
                                            sx={row.sx}
                                            row={row}
                                            table={table}
                                            columns={columns}
                                            isExpanded={row.isExpanded}
                                            onDoubleClick={handleDoubleClick}
                                            onClick={handleRowClick}
                                            renderExpandableBlock={renderExpandableBlock}
                                        />
                                    ),
                                )}
                            </TableBody>
                        </>
                    )}
                </MuiTable>
            )}
        </S.TableWrapper>
    );
};
