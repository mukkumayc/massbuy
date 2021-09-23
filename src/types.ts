export interface ICourse {
  course_id: number;
  name: string;
  description: string;
  price: number;
  course_link: string;
  picture_link: string;
  discount: string;
}

export type CartCourse = Omit<ICourse, "description">;

export interface IAppProps {
  authenticated: boolean;
  setAuthenticated(_b: boolean): void;
  isAdmin: boolean;
  setIsAdmin(_b: boolean): void;
  courses: ICourse[];
  setCourses(_b: ICourse[]): void;
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  surname: string;
  patronymic: string;
  password: string;
}
