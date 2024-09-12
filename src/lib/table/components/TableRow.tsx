import { SxProps } from '@mui/material';
import { Row, Table, flexRender } from '@tanstack/react-table';
import { ReactElement } from 'react';

import * as S from '../style';

type Props<TData> = {
  row: Row<TData>;
  table: Table<TData>;
  sx?: SxProps;
  isExpanded?: boolean;
  onClick?(row: Row<TData>): void;
  renderExpandableBlock?(row: TData): ReactElement;
};

export const TableRow = <TData,>({
  row,
  table,
  sx,
  isExpanded = false,
  onClick,
  renderExpandableBlock,
}: Props<TData>) => {
  return (
    <>
      <S.Row sx={sx} onClick={() => onClick?.(row)}>
        {row.getVisibleCells().map((cell) => (
          <S.Cell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</S.Cell>
        ))}
      </S.Row>
      {isExpanded && renderExpandableBlock ? (
        <S.Row sx={{ ...sx, height: 'max-content' }}>
          <S.Cell colSpan={table.getVisibleFlatColumns().length}>{renderExpandableBlock(row.original)}</S.Cell>
        </S.Row>
      ) : null}
    </>
  );
};
