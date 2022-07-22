import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../contexts/dataContext';
import styled from 'styled-components';


const Arrows = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: row;
    align-items: start;
    width: 100%;
    top: -3em;
    @media screen and (max-width: 980px){   
        justify-content: space-between;
        top: -30%;
    }
`;

const PaginateLink = styled.button`
    background-color: ${props => props.disabled ? 'lightgray' : '#000000'};
    color: ${props => props.disabled ? 'darkgray': '#ffffff'};
    border: none;
    font-size: 1.25em;
    font-family: 'Space Grotesk', sans-serif;
    margin: 0 2.5px;
    border-radius: 50%;
    @media screen and (max-width: 980px){   
        margin: 0;
        border-radius: unset;
    }
`;


const lockNumberRange = (n, max) => {
    return n <= 0 ? 0 : n >= max ? max : n;
}
  
const ShowSelectArrows = () => { 
    
    const dataContext = useContext(DataContext);
    const { index, isActive, shows } = dataContext.state;
    const { setIsActive, setIndex } = dataContext.handlers;
    const showsLength = shows ? Object.keys(shows).length : 11 - 1;
   
    const updateIndex = (e, x) => {

        let currentIndex, prev, next;
            currentIndex = x; 
            prev = x - 1;
            next = x + 1;

        let show = (shows ? shows.filter((show, ix) => ix === currentIndex) : (shows ? shows[0] : null));
        let showIndex = shows.indexOf(show[0]); 

        const findUpdatedIdx = (n) => lockNumberRange(showIndex + n, showsLength - 1);
        const nextShow = findUpdatedIdx(+1);
        const prevShow = findUpdatedIdx(-1);

        // console.log(shows[prev]);
        // console.log(shows[next]);
        
        setIndex({type: "setIndex", payload: showIndex });
        setIndex({type: "nextIndex", payload: nextShow }); 
        setIndex({type: "prevIndex", payload: prevShow });
        setIsActive(show[0].id);
        
        sessionStorage.setItem('saveCurrentIndex', showIndex);
        let slideToActive = document.querySelector(`#${show[0].id}`);
        slideToActive.scrollIntoView({ block: "end" });
    }
    
    return(

        <Arrows>
            <PaginateLink
                disabled={index['index'] === 0}
                name={'prev : ' + sessionStorage.getItem('saveCurrentIndex')}
                onClick={(e) => updateIndex(e, index['index'] - 1)}>&#60;</PaginateLink>
            <PaginateLink
                disabled={index['index'] === 10 - 1}
                name={'next: ' + sessionStorage.getItem('saveCurrentIndex')}
                onClick={(e) => updateIndex(e, index['next'] ? index['next'] : index['index'] + 1)}>&#62;</PaginateLink>
        </Arrows> 
    )
}

export default ShowSelectArrows