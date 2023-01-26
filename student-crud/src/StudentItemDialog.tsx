import { Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import styled from "styled-components";
import { Student } from "./student";

export interface StudentItemDialogProps {
  open: boolean;
  student?: Student;
  onClose: (student: Student | null) => void;
}

const nullUuid = "00000000-0000-0000-0000-000000000000";

const emptyStudent = (): Student => ({
  id: nullUuid,
  firstName: "",
  lastName: "",
  group: "",
  dateOfBirth: new Date(),
  gpa: 0,
});

export function StudentItemDialog({
  onClose,
  student = undefined,
  open,
}: StudentItemDialogProps) {
  const [editedStudent, setEditedStudent] = useState<Student>(
    student ? { ...student } : emptyStudent()
  );

  function handleClose() {
    setEditedStudent(emptyStudent());
    onClose(null);
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        {student
          ? `Изменение студента ${student.firstName} ${student.lastName}`
          : "Создание студента"}
      </DialogTitle>
      <DialogBody>
        <TextField
          label="Имя"
          value={editedStudent.firstName}
          onChange={(e) =>
            setEditedStudent((oldStudent) => ({
              ...oldStudent,
              firstName: e.target.value,
            }))
          }
        />
        <TextField
          label="Фамилия"
          value={editedStudent.lastName}
          onChange={(e) =>
            setEditedStudent((oldStudent) => ({
              ...oldStudent,
              lastName: e.target.value,
            }))
          }
        />
        <TextField
          label="Группа"
          value={editedStudent.group}
          onChange={(e) =>
            setEditedStudent((oldStudent) => ({
              ...oldStudent,
              group: e.target.value,
            }))
          }
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Дата рождения"
            value={editedStudent.dateOfBirth}
            onChange={(date) =>
              setEditedStudent((oldStudent) => ({
                ...oldStudent,
                dateOfBirth: date ?? new Date(),
              }))
            }
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </LocalizationProvider>
        <TextField
          label="Средний балл"
          value={editedStudent.gpa}
          onChange={(e) =>
            setEditedStudent((oldStudent) => ({
              ...oldStudent,
              gpa: parseFloat(e.target.value),
            }))
          }
          type="number"
        />

        <Button variant="contained" onClick={() => onClose(editedStudent)}>
          {student ? "Изменить" : "Создать"}
        </Button>
      </DialogBody>
    </Dialog>
  );
}

const DialogBody = styled.div`
  margin: 1rem;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
