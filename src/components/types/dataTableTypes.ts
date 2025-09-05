import type { Column } from "./columnTypes";

export type DataTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  onSort?: (columnKey: keyof T, order: "asc" | "desc") => void;
  sortColumn?: keyof T;
  sortOrder?: "asc" | "desc";
};
