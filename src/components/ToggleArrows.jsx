import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { DataContext } from '../contexts/dataContext';

const ToggleArrows = styled.a`
    padding: 0.5em;
    margin-left: 2px;
    font-family: 'Space Grotesk',sans-serif;
    background-color: ${props => props.active ? "#000000" : "#f5f5f5"};
    color: ${props => props.active ? "#ffffff" : "#000000"};
    border-radius: 5px;
    transition: all .5s ease;
    font-size: .75em;

    :hover{
        background-color: #000;
        color: #fff;
    }
`;


const ToggleArrowsLink = () => {
    const dataContext = useContext(DataContext);
    const index = dataContext.state.index;
    const setIndex = dataContext.handlers.setIndex;


    const triggers = () => {
        sessionStorage.removeItem("saveCurrentActive");
        sessionStorage.removeItem("saveCurrentIndex");
        window.history.replaceState({}, document.title, "/");
        setIndex({type: "toggleArrows", payload: !index.show })
        
    } 

    return(
        <ToggleArrows active={index.show} onClick={(e) => triggers(e, index.show)}>Arrows</ToggleArrows>
    )
}

export default ToggleArrowsLink;