import { boolean, number } from "yup";
import CartWrapper from "./components/CartWrapper";

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
  setAuthenticated(b: boolean): void;
  isAdmin: boolean;
  setIsAdmin(b: boolean): void;
  cart: CartWrapper;
  courses: ICourse[];
  setCourses(b: ICourse[]): void;
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  surname: string;
  patronymic: string;
  password: string;
}
