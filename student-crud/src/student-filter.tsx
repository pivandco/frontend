export interface StudentFilter {
  firstName?: string;
  lastName?: string;
  group?: string;
  dateOfBirth?: string;
  gpa?: {
    min?: number;
    max?: number;
  };
}
