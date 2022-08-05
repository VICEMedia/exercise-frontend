import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Carousel from "nuka-carousel";
import Image from "next/image";

import {
    EpisodesQuantity,
    ImageContainer,
    ShowTitle,
    SliderItem
} from "components/showsSlider/ShowsSlider.styled";
import SliderControls from "components/shared/sliderControls/SliderControls";

import { useMediaQueryContext } from "helpers/hooks";

import { Show } from "types/show";

export function Slider({ items }: { items: Array<Show> }): JSX.Element {
    const { isTabletViewOrLarger } = useMediaQueryContext();
    const router = useRouter();
    const [queryId, setQueryId] = useState("");
    const showIndex = items.findIndex(item => item.id === router.query.id);

    if (router.isReady && queryId === "") {
        setQueryId(router.query.id as string);
    }

    useEffect(() => {
        if (queryId === "") {
            return;
        }

        if (router.query.id) {
            router.push(`/?id=${router.query.id}`);
            return;
        }

        router.push(`/?id=${items[0].id}`);
        // disabling exhaustive-deps because of a bug when referencing the useRouter hook inside of a useEffect
        // check https://github.com/vercel/next.js/discussions/29403
        // check https://stackoverflow.com/questions/69203538/useeffect-dependencies-when-using-nextjs-router
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryId, router.query.id]);

    function setUrl(slideIndex: number) {
        if (showIndex === slideIndex) {
            return;
        }

        router.push(`/?id=${items[slideIndex].id}`);
    }

    return (
        <>
            {isTabletViewOrLarger && (
                <SliderControls
                    currentSlide={showIndex}
                    totalSlides={items.length}
                    onChange={nextSlide => setUrl(nextSlide)}
                />
            )}
            <Carousel
                slideIndex={showIndex}
                enableKeyboardControls
                withoutControls
                afterSlide={setUrl}
            >
                {items.map(show => (
                    <SliderItem key={show.id}>
                        <ImageContainer>
                            <Image
                                src={show.product_image_url}
                                alt=""
                                width={290}
                                height={430}
                                layout="fixed"
                            />
                        </ImageContainer>
                        <EpisodesQuantity>
                            {show.episodes} episodes
                        </EpisodesQuantity>
                        <ShowTitle>{show.title}</ShowTitle>
                    </SliderItem>
                ))}
            </Carousel>
            {!isTabletViewOrLarger && (
                <SliderControls
                    currentSlide={showIndex}
                    totalSlides={items.length}
                    onChange={nextSlide => setUrl(nextSlide)}
                />
            )}
        </>
    );
}

export default Slider;
