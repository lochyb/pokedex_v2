import { NavLink } from "react-router-dom";

import ThemeToggle from "./ThemeToggle.tsx";

function NavigationBar() {
  const baseStyles = "text-xl normal-case btn btn-ghost";
  const activeStyles = `text-xl normal-case btn btn-active btn-neutral`;
  const pendingStyles = `text-xl normal-case btn btn-active btn-secondary`;

  return (
    <div className="sticky top-0  z-10 flex justify-between bg-primary py-2 pl-2 pr-8">
      <div className="flex max-w-7xl gap-4">
        <NavLink
          className={({ isActive, isPending }) => (isActive ? activeStyles : isPending ? pendingStyles : baseStyles)}
          to={`/`}
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive, isPending }) => (isActive ? activeStyles : isPending ? pendingStyles : baseStyles)}
          to={`search`}
        >
          Search
        </NavLink>

        <NavLink
          className={({ isActive, isPending }) => (isActive ? activeStyles : isPending ? pendingStyles : baseStyles)}
          to={`list/generations`}
        >
          List
        </NavLink>

        <NavLink
          className={({ isActive, isPending }) => (isActive ? activeStyles : isPending ? pendingStyles : baseStyles)}
          to={`shiny`}
        >
          Shiny
        </NavLink>
      </div>
      <ThemeToggle />
    </div>
  );
}

export default NavigationBar;
