import useSWR from "swr";
import { Show } from "../types/show";
import showsData from "../json/shows.json";

export function HomePage() {
  return (
    <div>
      {showsData?.shows.map((show: Show) => (
        <p>{show?.title}</p>
      ))}
    </div>
  );
}

export default HomePage;
