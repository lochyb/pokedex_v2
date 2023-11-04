import { Outlet } from "react-router-dom";

import Layout from "./components/base/Layout.tsx";

function Root() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default Root;
