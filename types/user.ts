export interface User {
  id: string;
  role: string;
  profilePicture: string | null;
}

export interface Employee {
  id: string;
  userId: string;
  organizationId: string;
  firstName: string;
  lastName: string | null;
  designation: string | null;
  dateOfBirth: string | null;
  updatedAt: string;
  createdAt: string;
}