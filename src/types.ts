import * as t from "io-ts";

export const CourseC = t.type({
  course_id: t.number,
  name: t.string,
  description: t.string,
  price: t.number,
  course_link: t.string,
  picture_link: t.string,
  discount: t.number,
});

export type ICourse = t.TypeOf<typeof CourseC>;

export type CartCourse = Omit<ICourse, "description">;

export interface IPageProps {
  authenticated: boolean;
  setAuthenticated(_b: boolean): void;
  isAdmin: boolean;
  setIsAdmin(_b: boolean): void;
  courses: ICourse[];
  setCourses(_b: ICourse[]): void;
}

export const UserC = t.type({
  id: t.number,
  email: t.string,
  name: t.string,
  surname: t.string,
  patronymic: t.string,
  password: t.string,
  profile: t.type({
    coursera_email: t.string,
    openedu_email: t.string,
  }),
});

export type IUser = t.TypeOf<typeof UserC>;
