export type Column<T> = {
  header: string;
  accessor: keyof T;
  sortable?: boolean;
  renderCell?: (value: T[keyof T], row: T) => React.ReactNode;
};
