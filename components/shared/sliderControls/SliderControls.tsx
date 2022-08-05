import {
    Dot,
    DotWrapper,
    Dots,
    SlideNumber,
    StyledSliderControls
} from "components/shared/sliderControls/SliderControls.styled";

export interface SliderControlsProps {
    /** WARNING: DO NOT pass className manually - This has to be set in this way to fix a caveat with typescript and styled components. */
    className?: string;
    /** Current index for slider component */
    currentSlide: number;
    /** Total number of slides in the carousel */
    totalSlides: number;
    /** onChange callback function for when one of the controls gets pressed */
    onChange: (newIndex: number) => void;
}

function SliderControls({
    className,
    currentSlide,
    onChange,
    totalSlides
}: SliderControlsProps): JSX.Element {
    const dots = new Array(totalSlides).fill("");

    return (
        <StyledSliderControls className={className}>
            <Dots>
                {dots.map((_, index) => (
                    <DotWrapper key={`how-it-works-slide__${index}`}>
                        <Dot
                            isSelected={index === currentSlide}
                            onClick={() => onChange(index)}
                        />
                        <SlideNumber>{currentSlide}</SlideNumber>
                    </DotWrapper>
                ))}
            </Dots>
        </StyledSliderControls>
    );
}

export default SliderControls;
