import React, { useEffect, useState } from "react";
import { IPageProps } from "../../types";
import { useRouter } from "next/router";

interface AuthProps {
  pageProps: IPageProps;
}

const noAuth =
  (C: (_props: any) => JSX.Element) =>
  ({ pageProps, ...rest }: AuthProps) => {
    const router = useRouter();
    const [checkingAuth, setCheckingAuth] = useState(true);

    useEffect(() => {
      setCheckingAuth(true);
      if (pageProps.authenticated) {
        router.push("/");
      } else {
        setCheckingAuth(false);
      }
    }, [pageProps.authenticated]);

    return !checkingAuth ? <C {...pageProps} {...rest} /> : <></>;
  };

export default noAuth;
