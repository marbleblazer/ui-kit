import { Skeleton, TableBody } from '@mui/material';

import * as S from '../style';
import { TableColumn } from '../types';

type Props<TData> = {
  columns: TableColumn<TData>[];
};

const emptyRows = new Array(10).fill(null).map((_, index) => `row-${index + 1}`);

export const SkeletonRows = <TData,>({ columns }: Props<TData>) => {
  return (
    <TableBody>
      {emptyRows.map((row) => (
        <S.Row key={row}>
          {columns.map(({ id, columnDef }) => (
            <S.Cell key={`${row}-column-${id}`} sx={{ width: columnDef.meta?.width }}>
              <Skeleton sx={{ minHeight: '28px', borderRadius: '6px' }} />
            </S.Cell>
          ))}
        </S.Row>
      ))}
    </TableBody>
  );
};
