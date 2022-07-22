import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../contexts/dataContext';
import styled from 'styled-components';


const Title = styled.h1`
    font-size: 1em;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1.25em;
`;

const Episodes = styled.p`
    font-size: .75em;
    font-family: 'Space Grotesk', sans-serif;
    text-transform: uppercase;
    letter-spacing: .75px;
    color: darkgray;
`;

const MainStage = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    transition: all .5s ease;
    @media screen and (max-width: 980px){
        margin-top: 2em;
    }
   
`;

const Image = styled.img`
    width: 250px;
    @media screen and (max-width: 980px){
        margin-top: 2em;
    }
`;

const ShowActivePanel = () => {

    const dataContext = useContext(DataContext);
    const { shows, isActive } = dataContext.state;
    const show = shows ? shows.filter(show => show.id === isActive) : '';
    
    const Output = Object.entries(show).map((s, i) => {
        const { title, episodes, product_image_url } = s[1];
        return ( 
            <MainStage className={`shows-main`}  key={i}>
                <Image src={`${product_image_url}`} alt={title} />
                <Episodes>{episodes} episodes</Episodes>
                <Title>{title}</Title> 
            </MainStage>
        )
    });

    return Output
}

export default ShowActivePanel;