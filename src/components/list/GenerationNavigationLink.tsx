import { NavLink } from "react-router-dom";

interface TableNavigationLinkProps {
  name: string;
  to: string;
}

function GenerationNavigationLink({ name, to }: TableNavigationLinkProps) {
  const baseStyles = "join-item btn btn-ghost";
  const activeStyles = `join-item btn btn-active btn-neutral`;
  const pendingStyles = `join-item btn btn-active btn-secondary`;

  return (
    <NavLink
      className={({ isActive, isPending }) => (isActive ? activeStyles : isPending ? pendingStyles : baseStyles)}
      to={to}
    >
      {name}
    </NavLink>
  );
}

export default GenerationNavigationLink;
