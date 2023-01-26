import styled from "styled-components";
import Sidebar from "./Sidebar";
import { useStudents } from "./student";
import StudentTable from "./StudentTable";

export default function StudentView() {
  const [students, setStudents] = useStudents();

  return (
    <Wrapper>
      <StudentTable students={students} />
      <Sidebar filterProps={{ filter: {} }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  gap: 1rem;
  margin: 1rem;
`;
