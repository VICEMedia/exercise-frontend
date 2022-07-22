import React from 'react';
import { useEffect, useContext, useRef, useCallback } from 'react';
import { DataContext } from '../contexts/dataContext';
import Layout from './Layout';
import ShowsListItem from './ShowsListItem';
import ShowActivePanel from './ShowActivePanel';
import ResetLink from './ResetLink';
import ShowsArrows from './ShowsArrows';
import ToggleArrows from './ToggleArrows';
import styled from 'styled-components';
import './../globals.scss';

/* Styled components */

const Container = styled.div`
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh; 
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(167,170,178,.5);
   
    @media screen and (max-width: 980px){
        flex-direction: column-reverse;
        justify-content: center;

    }
`;


const ShowSlideMenu = styled.ul`
    @media screen and (max-width: 980px){
        width: 280px;
        margin: 0 auto;
    }
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    width: 500px;
    margin: 0 auto;
    display: grid;
    grid-auto-flow: column;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    position: relative;
    
`;


const Loading = styled.h1`
    text-align: center;
    font-family: 'Montserrat',sans-serif;
    font-size: 16px;
    letter-spacing: 5px;
    text-transform: uppercase;
`;

const Settings = styled.div`
       
`;

const HR = styled.hr`
    width: 80%;
    margin: 2em auto;
    border-top: 1px solid rgba(167,170,178,.5);
    @media screen and (max-width: 980px){   
        width: 100%;
    }
   
`;



const ShowSelector = () => {
    
    // Using DataContext to hydrate the ShowSlide Component. The ShowActivePanel renders the relevant
    // content based on the active show as set by the shared context. 
    
    // By updating the context, am able to manipulate active states etc...without something like Redux. 
    // There are definitely some processing gotcha's here, but in this case seems like it will do the trick.

    const dataContext = useContext(DataContext);
    const { loading, shows, index, isActive } = dataContext.state;


    // so this callback runs on load to check if the active menu element is offscreen, and if so, 
    // to slide on over to the active element. Have duplicated similar elsewhere, which makes me think a further
    // itereation could use this as a custom hook or other helper.  
   
    const checkForValue = useCallback(async(isActive) => {
        let slideToActive = document.querySelector(`#${isActive}`);
        if(slideToActive){
            slideToActive.scrollIntoView({ block: "center", behavior: "smooth"  });
        } 
    }, []); 
    
    // ahem...yeah, so 3/4 second delay to make sure the context has a chance to hydrate. Isn't ideal, but for
    // argument's sake, we can take this as spoofing a server repsonse.  

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            checkForValue(isActive);
        }, 750);

        return () => {
            clearTimeout(timeoutId);
        }
    },[isActive]);
        
    return(
        <Layout>
            <Container>
                <ShowSlideMenu>  
                    {loading ? <Loading>Loading Shows...</Loading> : shows.map((show, i) => {
                        return <ShowsListItem key={i} content={show.id} index={i} />;
                    })}
                </ShowSlideMenu>
                <HR />
                {/* Uncomment the next line and the ToggleArrows component. */}
                {index.show ? <ShowsArrows /> : null}
                <ShowActivePanel />
                
                <Settings>
                    <ResetLink />
                    <ToggleArrows />
                </Settings> 
            </Container>
        </Layout>
    );
};

export default ShowSelector;