import { PokemonStat } from "pokenode-ts";

interface PokemonStatsTableProps {
  stats: PokemonStat[];
}

function PokemonStatsTable({ stats }: PokemonStatsTableProps) {
  return (
    <div className="mx-auto overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Stat</th>
            <th>Base</th>
            <th>Graph</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat) => {
            return (
              <tr key={stat.stat.name}>
                <th>{stat.stat.name.toUpperCase()}</th>
                <td>
                  <span className="pr-2">{stat.base_stat}</span>
                </td>
                <td>
                  <progress className="progress progress-accent w-56" value={stat.base_stat} max="255"></progress>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PokemonStatsTable;
