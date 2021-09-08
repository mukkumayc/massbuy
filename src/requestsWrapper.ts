// type getPath =
//   | "/api/users/all"
//   | `/api​/users​/${number}`
//   | "/api/courses/all"
//   | `/api​/courses​/${number}`
//   | `/api/baskets/${number}`;

// type postPath =
//   | "/api/users/auth"
//   | "/api/users/register/user"
//   | "/api/users/register/student"
//   | "/api/courses/create"
//   | `/api/courses/update/${number}`
//   | `/api/courses/delete/${number}`
//   | `/api/courses/user_courses/${number}`
//   | `/api/courses/add_user_to_course/${number}/${number}`
//   | `/api/courses/delete_user_from_course/${number}/${number}`
//   | `/api/baskets/add_course_to_basket/${number}/${number}`
//   | `/api/baskets/delete_course_from_basket/${number}/${number}`
//   | `/api/baskets/delete_all_courses_from_basket/${number}`
//   | `/api/orders/payment/${number}`
//   | `/api/orders/check/${number}/${number}`;

if (
  !process.env.REACT_APP_SERVER_URL === undefined &&
  !process.env.REACT_APP_DEBUG_NO_SERVER
) {
  throw new Error("Not a no-server mode, but url not provided");
}

class RequestsWrapper {
  private readonly swaggerhub =
    "https://virtserver.swaggerhub.com/AndyS1mpson/PaymentSystemAPI/1.0.0";
  private _get(host: string, path: string) {
    return fetch(`${host}${path}`, {
      credentials: "include",
    }).then((res) => {
      if (!res.ok) {
        return res.text().then((txt) => {
          throw new Error(txt);
        });
      } else {
        return res.json();
      }
    });
    // .catch((err) => {
    //   alert(err.toString());
    //   throw err;
    // });
  }
  private _post(host: string, path: string, body: any) {
    return fetch(`${host}${path}`, {
      method: "post",
      credentials: "include",
      ...(body
        ? {
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        : {}),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((txt) => {
            throw new Error(txt);
          });
        } else {
          return res.json();
        }
      })
      .catch((err) => {
        if (err.name === "SyntaxError") {
          return {};
        }
        // alert(err.toString());
        throw err;
      });
  }
  async get(path: string) {
    if (process.env.REACT_APP_DEBUG_NO_SERVER) {
      console.log(
        `GET ${process.env.REACT_APP_SERVER_URL}${path}\n${this.swaggerhub}${path}`
      );
      if (path.includes("user_courses")) {
        return [
          {
            course_id: 0,
            name: "Math",
            description: "It is a math course",
            price: 0,
            course_link: "string",
            picture_link: "string",
            discount: 0.3,
          },
        ];
      }
      return await this._get(this.swaggerhub, path);
    }
    if (process.env.REACT_APP_SERVER_URL === undefined) {
      throw new Error("Not a no-server mode, but url not provided");
    }
    return await this._get(process.env.REACT_APP_SERVER_URL, path);
  }
  async post(path: string, body?: object) {
    if (process.env.REACT_APP_DEBUG_NO_SERVER) {
      console.log(
        `POST ${
          process.env.REACT_APP_SERVER_URL
        }${path}\nbody:\n${JSON.stringify(body, null, 2)}`
      );
      return await this._post(this.swaggerhub, path, body);
    }
    if (process.env.REACT_APP_SERVER_URL === undefined) {
      throw new Error("Not a no-server mode, but url not provided");
    }
    return await this._post(process.env.REACT_APP_SERVER_URL, path, body);
  }
}

const requestsWrapper = new RequestsWrapper();

export default requestsWrapper;
