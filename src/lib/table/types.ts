import { AccessorColumnDef, Column } from '@tanstack/react-table';

type TableMeta = {
  width?: string;
  isVisible?: boolean;
  isGrouping?: boolean;
};

export type TableColumnDef<TData> = AccessorColumnDef<TData> & {
  header: string;
  meta?: TableMeta;
};

export type TableColumn<TData> = Omit<Column<TData>, 'columnDef'> & {
  columnDef: TableColumnDef<TData>;
};
