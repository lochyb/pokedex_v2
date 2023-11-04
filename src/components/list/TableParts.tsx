export const TableHead = () => {
  return (
    <thead>
      <TableHeadings />
    </thead>
  );
};

export const TableFoot = () => {
  return (
    <tfoot>
      <TableHeadings />
    </tfoot>
  );
};

const TableHeadings = () => {
  return (
    <tr className="overflow-hidden bg-primary-content/20">
      {/*// TODO: mobile responsive*/}
      <th>Name</th>
      <th>Types</th>
      <th className="hidden xs:table-cell">Abilities</th>
    </tr>
  );
};
