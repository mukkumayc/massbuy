import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import Courses from "../../containers/courses/Courses";
import NotFound from "../../containers/NotFound";
import Login from "../../containers/Login";
import Course from "../../containers/courses/Course";
import Cart from "../../containers/Cart";
import Search from "../../containers/Search";
import { IAppProps } from "../../types";
import Users from "../../containers/Users";
import CourseCreate from "../../containers/courses/CourseCreate";
import CourseUpdate from "../../containers/courses/CourseUpdate";
import UserCourses from "../../containers/courses/UserCourses";
import Register from "../../containers/Register";
import RegisterStudent from "../../containers/RegisterStudent";

interface RoutesProps {
  appProps: IAppProps;
}

const Routes = ({ appProps }: RoutesProps) => {
  return (
    <Switch>
      <AuthenticatedRoute
        path="/courses/all"
        exact
        component={Courses}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/courses/create"
        exact
        component={CourseCreate}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/courses/:courseId"
        exact
        component={Course}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/courses/update/:courseId"
        exact
        //@ts-ignore
        component={CourseUpdate}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/courses/user_courses/:userId"
        exact
        component={UserCourses}
        {...{ appProps }}
      />
      <UnauthenticatedRoute
        path="/login"
        exact
        component={Login}
        appProps={appProps}
      />
      <UnauthenticatedRoute
        path="/register/user"
        exact
        component={Register}
        appProps={appProps}
      />
      <UnauthenticatedRoute
        path="/register/student"
        exact
        component={RegisterStudent}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/cart"
        exact
        component={Cart}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/search"
        exact
        component={Search}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/users/all"
        exact
        component={Users}
        appProps={appProps}
      />
      <Route path="/" exact>
        <Redirect to="/courses/all" />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
