import { Either, left, mapLeft, right } from "fp-ts/lib/Either";
import * as t from "io-ts";
import { CourseC, ICourse, IUser, UserC } from "./types";
import { validationErrorsToString } from "./utils";

if (process.env.NEXT_PUBLIC_SERVER_URL === undefined) {
  console.warn("Url is not provided, using swaggerhub");
}

const serverUrl =
  process.env.NEXT_PUBLIC_SERVER_URL ??
  "https://virtserver.swaggerhub.com/mukkumayc-team/payment-system/0.1.0";

async function _fetch<A>(
  url: string,
  method: "get" | "post",
  validator: t.Decoder<unknown, A>,
  body?: any
): Promise<Either<string, A>> {
  const res = await fetch(url, {
    method,
    credentials: "include",
    ...(body
      ? {
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" },
        }
      : {}),
  }).catch((err: Error) => err.toString());

  if (typeof res === "string") {
    return left(res);
  }

  if (!res.ok) {
    return left(await res.text());
  }

  if (validator === t.unknown) {
    return right({} as any);
  }

  try {
    const val = await (res.headers.get("Content-Type") === "application/json"
      ? res.json()
      : res.text());
    return mapLeft<t.ValidationError[], string>(validationErrorsToString)(
      validator.decode(val)
    );
  } catch (err) {
    return left((err as Error).toString());
  }
}

class RequestsWrapper {
  // user functions

  login(
    email: string,
    password: string
  ): Promise<Either<string, { id: number }>> {
    return _fetch(
      `${serverUrl}/api/users/login`,
      "post",
      t.type({ id: t.number }),
      { email, password }
    );
  }

  register(
    user: Omit<IUser, "id"> & { password: string }
  ): Promise<Either<string, IUser>> {
    return _fetch(`${serverUrl}/api/users/register/user`, "post", UserC, user);
  }

  registerStudent(
    email: string,
    password: string
  ): Promise<Either<string, IUser>> {
    return _fetch(`${serverUrl}/api/users/register/student`, "post", UserC, {
      email,
      password,
    });
  }

  async isAuth(): Promise<Either<string, unknown>> {
    const res = await _fetch(
      `${serverUrl}/api/users/is_auth`,
      "post",
      t.unknown
    );
    console.log(res);
    return res;
  }

  async users(): Promise<Either<string, IUser[]>> {
    return _fetch(`${serverUrl}/api/users/all`, "get", t.array(UserC));
  }

  // course functions

  courses(): Promise<Either<string, ICourse[]>> {
    return _fetch(`${serverUrl}/api/courses/all`, "get", t.array(CourseC));
  }

  course(id: number | string): Promise<Either<string, ICourse>> {
    return _fetch(`${serverUrl}/api/courses/${id}`, "get", CourseC);
  }

  createCourse(course: Omit<ICourse, "course_id">) {
    return _fetch(`${serverUrl}/api/courses/create`, "post", t.unknown, course);
  }

  updateCourse(courseId: number | string, course: ICourse) {
    return _fetch(
      `${serverUrl}/api/courses/update/${courseId}`,
      "post",
      t.unknown,
      course
    );
  }

  deleteCourse(courseId: number | string, course: ICourse) {
    return _fetch(
      `${serverUrl}/api/courses/delete/${courseId}`,
      "post",
      t.unknown,
      course
    );
  }

  userCourses(userId: number | string): Promise<Either<string, ICourse[]>> {
    return _fetch(
      `${serverUrl}/api/courses/user_courses/${userId}`,
      "post",
      t.array(CourseC)
    );
  }

  // basket functions

  basket(userId: number | string) {
    return _fetch(
      `${serverUrl}/api/baskets/${userId}`,
      "get",
      t.type({ courses: t.array(CourseC), total_price: t.number })
    );
  }

  addCourseToBasket(
    userId: number,
    courseId: number
  ): Promise<Either<string, unknown>> {
    return _fetch(
      `${serverUrl}/api/baskets/add_course_to_basket/${userId}/${courseId}`,
      "post",
      t.unknown
    );
  }

  deleteCourseFromBasket(
    userId: number,
    courseId: number
  ): Promise<Either<string, unknown>> {
    return _fetch(
      `${serverUrl}/api/baskets/delete_course_from_basket/${userId}/${courseId}`,
      "post",
      t.unknown
    );
  }

  deleteAllCoursesFromBasket(userId: number): Promise<Either<string, unknown>> {
    return _fetch(
      `${serverUrl}/api/baskets/delete_all_courses_to_basket/${userId}`,
      "post",
      t.unknown
    );
  }

  payment(userId: number | string) {
    return _fetch(
      `${serverUrl}/api/orders/payment/${userId}`,
      "post",
      t.string
    );
  }

  checkPayment(token: string) {
    return _fetch(`${serverUrl}/api/orders/check/${token}`, "post", t.unknown);
  }
}

const requestsWrapper = new RequestsWrapper();

export default requestsWrapper;
