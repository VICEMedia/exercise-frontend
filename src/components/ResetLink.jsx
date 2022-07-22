import React from 'react';
import styled from 'styled-components';

const Reset = styled.a`
    padding: 0.5em;
    font-family: 'Space Grotesk',sans-serif;
    background-color: #f5f5f5;
    border-radius: 5px;
    transition: all .5s ease;
    font-size: .75em;

    :hover{
        background-color: #000;
        color: #fff;
    }
`;

const resetComponent = () => {
    sessionStorage.removeItem("saveCurrentActive");
    sessionStorage.removeItem("saveCurrentIndex");
    window.location.reload();
}


const ResetLink = () => {
    return(
        <Reset onClick={() => resetComponent()}>Reset</Reset>
    )
}

export default ResetLink;