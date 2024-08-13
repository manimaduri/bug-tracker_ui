import { User, Employee } from './user';
import { Organization } from './organization';

export interface RegisterResponse {
  token: string;
  user: User;
  employee?: Employee;
  organization?: Organization;
}