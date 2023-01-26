import useStorageState from "react-use-storage-state";

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  group: string;
  dateOfBirth: Date;
  gpa: number;
}

export const useStudents = () => useStorageState<Student[]>("students", []);
