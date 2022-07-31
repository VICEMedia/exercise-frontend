import showsData from "json/shows.json";
import type { NextPage } from "next";

import { Show } from "types/show";

const HomePage: NextPage = () => {
    return (
        <div>
            {showsData?.shows.map((show: Show) => (
                <p key={show?.title}>{show?.title}</p>
            ))}
        </div>
    );
};

export default HomePage;
