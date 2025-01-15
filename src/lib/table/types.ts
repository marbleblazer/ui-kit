import { AccessorColumnDef, Column } from '@tanstack/react-table';

type TableMeta = {
    width?: string;
    isVisible?: boolean;
    isGrouping?: boolean;
};

export type TableColumnDef<T> = AccessorColumnDef<T> & {
    header: string;
    meta?: TableMeta;
};

export type TableColumn<T> = Omit<Column<T>, 'columnDef'> & {
    columnDef: TableColumnDef<T>;
};
