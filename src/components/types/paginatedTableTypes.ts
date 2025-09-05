import type { DataTableProps } from "../types";
export type PaginatedTableProps<T> = Omit<DataTableProps<T>, "data"> & {
  data: T[];
  rowsPerPageOptions?: number[];
};