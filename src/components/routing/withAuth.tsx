import React, { useEffect, useState } from "react";
import { IPageProps } from "../../types";
import { useRouter } from "next/router";

interface AuthProps {
  pageProps: IPageProps;
}

const withAuth =
  (C: (_props: any) => JSX.Element) =>
  ({ pageProps }: AuthProps) => {
    const router = useRouter();
    const [checkingAuth, setCheckingAuth] = useState(true);

    useEffect(() => {
      setCheckingAuth(true);
      !pageProps.authenticated ? router.push("/login") : setCheckingAuth(false);
    }, [pageProps.authenticated]);

    return !checkingAuth ? <C {...pageProps} /> : <></>;
  };

export default withAuth;
