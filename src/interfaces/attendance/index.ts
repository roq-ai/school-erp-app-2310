import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AttendanceInterface {
  id?: string;
  student_id: string;
  date: any;
  status: string;
  teacher_id: string;
  created_at?: any;
  updated_at?: any;

  user_attendance_student_idTouser?: UserInterface;
  user_attendance_teacher_idTouser?: UserInterface;
  _count?: {};
}

export interface AttendanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  student_id?: string;
  status?: string;
  teacher_id?: string;
}
