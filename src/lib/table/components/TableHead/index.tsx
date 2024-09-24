import { TableHead as MuiTableHead, TableSortLabel } from '@mui/material';
import { SortingState } from '@tanstack/react-table';

import { TableColumn } from '../../types';
import * as S from './style';
import { CaretDownIcon, CaretUpIcon, SortIcon } from '@chirp/ui/assets/icons';

type Props<TData> = {
    columns: TableColumn<TData>[];
    enableSorting: boolean;
    sortingState: SortingState;
};

export const TableHead = <TData,>({ columns, enableSorting, sortingState }: Props<TData>) => {
    return (
        <MuiTableHead>
            <S.Row>
                {columns.map(({ id, columnDef, getCanSort, getToggleSortingHandler }) => {
                    const { meta, maxSize: maxWidth, header } = columnDef;
                    const needSorting = enableSorting && getCanSort();
                    const containedSort = sortingState.find((item) => item.id?.toLowerCase() === id?.toLowerCase());
                    let IconComponent = SortIcon;

                    if (containedSort) {
                        IconComponent = containedSort?.desc ? CaretDownIcon : CaretUpIcon;
                    }

                    return (
                        <S.HeadCell key={id} sx={{ width: meta?.width, maxWidth }}>
                            {needSorting ? (
                                <TableSortLabel IconComponent={IconComponent} onClick={getToggleSortingHandler()}>
                                    {header}
                                </TableSortLabel>
                            ) : (
                                header
                            )}
                        </S.HeadCell>
                    );
                })}
            </S.Row>
        </MuiTableHead>
    );
};
