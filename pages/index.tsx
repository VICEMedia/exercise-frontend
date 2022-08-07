import ShowsSlider from "components/showsSlider/ShowsSlider";

import { fetchShows } from "helpers/api/fetchShows";

import { Show } from "types/show";

function HomePage({ shows }: { shows: Array<Show> }) {
    return <main>{shows && <ShowsSlider items={shows} />}</main>;
}

export async function getStaticProps() {
    let shows;

    try {
        shows = await fetchShows();

        return {
            props: { shows: shows || [] },
            revalidate: 86400
        };
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
    }

    return {
        props: { shows: shows ?? [] },
        revalidate: 86400
    };
}

export default HomePage;
