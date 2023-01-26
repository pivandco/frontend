import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Student } from "./student";

const columns: GridColDef[] = [
  { field: "firstName", headerName: "Имя", width: 130 },
  { field: "lastName", headerName: "Фамилия", width: 130 },
  { field: "group", headerName: "Группа", width: 90 },
  {
    field: "dateOfBirth",
    headerName: "Дата рождения",
    width: 160,
    type: "date",
  },
  {
    field: "gpa",
    headerName: "Средний балл",
    type: "number",
    width: 130,
  },
];

export default function StudentTable({ students }: { students: Student[] }) {
  return (
    <DataGrid
      rows={students}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  );
}
