import { SxProps } from '@mui/material';
import { Row, Table, flexRender } from '@tanstack/react-table';
import { ReactElement } from 'react';

import * as S from '../style';
import { TableColumn } from '../types';

type Props<TData> = {
    row: Row<TData>;
    table: Table<TData>;
    columns?: TableColumn<TData>[];
    sx?: SxProps;
    isExpanded?: boolean;
    onClick?(row: Row<TData>): void;
    onDoubleClick?(row: Row<TData>): void;
    renderExpandableBlock?(row: TData): ReactElement;
};

export const TableRow = <TData,>({
    row,
    table,
    sx,
    columns,

    isExpanded = false,
    onClick,
    onDoubleClick,
    renderExpandableBlock,
}: Props<TData>) => {
    return (
        <>
            <S.Row
                sx={sx}
                className={onDoubleClick ? 'hoverable' : ''}
                onClick={() => onClick?.(row)}
                onDoubleClick={() => onDoubleClick?.(row)}
            >
                {row.getVisibleCells().map((cell, index) => (
                    <S.Cell
                        sx={{
                            maxWidth: columns?.[index]?.getSize(),
                        }}
                        key={cell.id}
                    >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </S.Cell>
                ))}
            </S.Row>
            {isExpanded && renderExpandableBlock ? (
                <S.Row sx={{ ...sx, height: 'max-content' }}>
                    <S.Cell colSpan={table.getVisibleFlatColumns().length}>
                        {renderExpandableBlock(row.original)}
                    </S.Cell>
                </S.Row>
            ) : null}
        </>
    );
};
