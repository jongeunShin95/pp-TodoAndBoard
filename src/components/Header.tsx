import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderComponenet = styled.div`
    font-size: 30px;
    height: 200px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid black;
    margin-bottom: 10px;
`;

const LinkComponent = styled(NavLink)`
    height: 50px;
    width: 100%;
    text-align: center;
    font-size: 50px;
    text-decoration: none;
    color: gray;
`;

function Header() {

    return (
        <HeaderComponenet>
            <LinkComponent to="/Todo" activeStyle={{ color: "black" }}>Todo</LinkComponent>
            <LinkComponent to="/Board" activeStyle={{ color: "black" }}>Board</LinkComponent>
        </HeaderComponenet>
    );
}

export default Header;