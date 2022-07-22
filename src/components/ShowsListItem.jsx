import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../contexts/dataContext';
import styled from 'styled-components';


const Box = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${props => props.activeSlide ? 'black' : 'lightgray' };
    margin-bottom: 10px;
    transition: all .5s ease;
    &:hover{
        background-color: ${props => props.activeSlide ? 'black' : 'darkgray' };
    }
`;

const Indicator = styled.span`
    display: ${props => props.activeSlide ? 'block' : 'none' };
    font-family: 'Space Grotesk', sans-serif;
`


const ShowPanelListItem = styled.li`
    list-style: none;
    padding: 1em;
    margin-right: 2em;
    text-align: center;
    scroll-snap-align: start;  
    display: inline-block;
    overscroll-behavior: contain;

    @media screen and (max-width: 980px){
        margin-right: 0;
    }
`

const ShowPanel = ( props ) => {
    const dataContext = useContext(DataContext);
    const { index, isActive } = dataContext.state;
    const { setIsActive, setIndex } = dataContext.handlers;
    const id = props.content;
    const activeSlide = (id === isActive) ? 'active' : '';
    // or this....
    var idx = props.index;

    const triggers = (id, idx) => {
        // console.log('set id to: ' + id)
        setIndex({type: "setIndex", payload: idx }); 
        setIndex({type: "nextIndex", payload: ++idx  }); 
        setIndex({type: "prevtIndex", payload: --idx }); 
        setIsActive(id);
    }

    return(
        <ShowPanelListItem id={id} index={idx} className={activeSlide}>
            <>
                <Box activeSlide={activeSlide} onClick={() => triggers(id, idx)} />
                <Indicator activeSlide={activeSlide}>{idx ? ++idx : 1}</Indicator>
            </>
        </ShowPanelListItem>
    )
}

export default ShowPanel;