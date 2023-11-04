import GenerationNavigationLink from "./GenerationNavigationLink.tsx";

function TableNavigation() {
  return (
    <div className="join w-full flex-wrap justify-center">
      <GenerationNavigationLink name="Gen 1" to={`/list/generations/1?page=1`} />
      <GenerationNavigationLink name="Gen 2" to={`/list/generations/2?page=1`} />
      <GenerationNavigationLink name="Gen 3" to={`/list/generations/3?page=1`} />
      <GenerationNavigationLink name="Gen 4" to={`/list/generations/4?page=1`} />
      <GenerationNavigationLink name="Gen 5" to={`/list/generations/5?page=1`} />
      <GenerationNavigationLink name="Gen 6" to={`/list/generations/6?page=1`} />
      <GenerationNavigationLink name="Gen 7" to={`/list/generations/7?page=1`} />
      <GenerationNavigationLink name="Gen 8" to={`/list/generations/8?page=1`} />
    </div>
  );
}

export default TableNavigation;
