import { Button, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import styled from "styled-components";
import { StudentFilter as StudentFilterType } from "./student-filter";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export interface StudentFilterProps {
  filter: StudentFilterType;
  groups?: string[];
  onFilterChange?: (filter: StudentFilterType) => void;
}

export function StudentFilter({
  filter,
  groups = [],
  onFilterChange,
}: StudentFilterProps) {
  return (
    <form>
      <Bold>Фильтр</Bold>
      <div>
        <TextField label="Фамилия" variant="standard" value={filter.lastName} fullWidth />
        <br />
        <TextField label="Имя" variant="standard" value={filter.firstName} fullWidth />
        <br />
        <TextField label="Группа" variant="standard" value={filter.group} fullWidth />
        <br />
        <br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Дата рождения"
            value={filter.dateOfBirth}
            onChange={() => {}}
            renderInput={(params) => <TextField {...params} fullWidth/>}
          />
        </LocalizationProvider>
        <br />
        <br />
        Средний балл
        <br />
        <TextField
          label="от"
          variant="standard"
          value={filter.gpa?.min}
          size="small"
        />{" "}
        <TextField
          label="до"
          variant="standard"
          value={filter.gpa?.max}
          size="small"
        />
      </div>
      <div>
        <br/>
        <Button variant="outlined" type="reset" onClick={() => onFilterChange?.({})}>
          Сброс
        </Button>
      </div>
    </form>
  );
}

const Bold = styled.span`
  font-weight: bold;
`
