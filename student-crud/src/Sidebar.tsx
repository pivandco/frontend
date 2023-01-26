import { Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { Student, useStudents } from "./student";
import { StudentFilter, StudentFilterProps } from "./StudentFilter";
import { StudentItemDialog } from "./StudentItemDialog";

export default function Sidebar({
  filterProps,
}: {
  filterProps: StudentFilterProps;
}) {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [students, setStudents] = useStudents();

  function onStudentCreateOrEditDialogClose(student: Student | null) {
    setDialogOpen(false);
    if (student == null) return;
    setStudents((old) => [...old, { ...student, id: crypto.randomUUID() }]);
  }

  return (
    <Wrapper>
      <Button variant="contained" onClick={() => setDialogOpen(true)}>
        Добавить студента
      </Button>
      <StudentItemDialog
        onClose={onStudentCreateOrEditDialogClose}
        open={isDialogOpen}
      />
      <StudentFilter {...filterProps} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-left: 1px var(--separator-color) solid;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
