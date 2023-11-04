import { useRouteError } from "react-router-dom";

import Layout from "../components/base/Layout.tsx";

function Error() {
  const error = useRouteError();

  return (
    <Layout>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/*// @ts-ignore*/}
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </Layout>
  );
}

export default Error;
