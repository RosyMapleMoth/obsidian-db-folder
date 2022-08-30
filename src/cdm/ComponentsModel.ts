import { CellContext, Table } from "@tanstack/react-table";
import { RowDataType } from "cdm/FolderModel";
import { Literal } from "obsidian-dataview/lib/data-model/value";

export type RowSelectOption = {
    backgroundColor: string,
    label: string,
}

export type CellComponentProps = {
    defaultCell: CellContext<RowDataType, Literal>;
}

export type EditorCellComponentProps = {
    setDirtyCell: (value: boolean) => void;
} & CellComponentProps;

export type DataviewFiltersProps = {
    table: Table<RowDataType>;
};