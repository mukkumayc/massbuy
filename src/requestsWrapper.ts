if (
  process.env.NEXT_PUBLIC_SERVER_URL === undefined &&
  !process.env.REACT_APP_DEBUG_NO_SERVER
) {
  throw new Error("Not a non-server mode, but url not provided");
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
          console.log(res.headers.get("Content-Type"));
          if (res.headers.get("Content-Type") === "application/json") {
            return res.json();
          } else {
            return res.text();
          }
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
        `GET ${process.env.NEXT_PUBLIC_SERVER_URL}${path}\n${this.swaggerhub}${path}`
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
    if (process.env.NEXT_PUBLIC_SERVER_URL === undefined) {
      throw new Error("Not a no-server mode, but url not provided");
    }
    return await this._get(process.env.NEXT_PUBLIC_SERVER_URL, path);
  }
  async post(path: string, body?: object) {
    if (process.env.REACT_APP_DEBUG_NO_SERVER) {
      console.log(
        `POST ${
          process.env.NEXT_PUBLIC_SERVER_URL
        }${path}\nbody:\n${JSON.stringify(body, null, 2)}`
      );
      return await this._post(this.swaggerhub, path, body);
    }
    if (process.env.NEXT_PUBLIC_SERVER_URL === undefined) {
      throw new Error("Not a no-server mode, but url not provided");
    }
    return await this._post(process.env.NEXT_PUBLIC_SERVER_URL, path, body);
  }
}

const requestsWrapper = new RequestsWrapper();

export default requestsWrapper;
