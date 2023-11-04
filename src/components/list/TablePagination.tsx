import { NavLink, useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store.ts";

function TablePagination() {
  const { generationId } = useParams();
  const [URLSearchParams] = useSearchParams();

  const pages = useSelector((state: RootState) => state.pokemonList.pages);

  const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);
  const currentTab = URLSearchParams.get("page") ?? "1";

  return (
    <>
      <div className="join w-full flex-wrap justify-center">
        {pagesArray.map((page) => {
          return (
            <NavLink
              className={`btn join-item ${currentTab === String(page) ? "btn-neutral btn-active" : ""}`}
              key={`page-${page}`}
              to={`/list/generations/${generationId ?? 1}?page=${page}`}
            >
              {page}
            </NavLink>
          );
        })}
      </div>
    </>
  );
}

export default TablePagination;
