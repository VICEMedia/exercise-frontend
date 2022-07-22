import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 2em 4em;
    background-color: #f5f5f5;
    @media screen and (max-width: 980px){
        padding: 1em;
    }
`;

const Layout = ({ children }) => {
    return(
        <Wrapper className="mainLayout">
            {children}
        </Wrapper>
    )
}

export default Layout;