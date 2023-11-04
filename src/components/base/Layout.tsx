import { ReactNode } from "react";

import NavigationBar from "./NavigationBar.tsx";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavigationBar />

      <div className="mx-auto max-w-7xl">{children}</div>
    </>
  );
}

export default Layout;
