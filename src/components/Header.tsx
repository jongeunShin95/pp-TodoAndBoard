import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ThemeProvider } from '@material-ui/styles';
import { unstable_createMuiStrictModeTheme } from '@material-ui/core';

const NavLinkComponent = styled(NavLink)`
    text-decoration: none;
    color: black;
`;

function Header() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={unstable_createMuiStrictModeTheme()}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
            <MenuItem onClick={handleClose}><NavLinkComponent to="/Todo">Todo</NavLinkComponent> </MenuItem>
            <MenuItem onClick={handleClose}><NavLinkComponent to="/Board">Board</NavLinkComponent></MenuItem>
            </Menu>
        </ThemeProvider>
    );
}

export default Header;