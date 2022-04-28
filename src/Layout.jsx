import React, { useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import AuthService  from './services/auth-service.js'

const Layout = () => {
        const navigate = useNavigate();
        const [expanded, setExpanded] = useState(true);
        const currentUser = AuthService.getCurrentUser();

        function onMenuItemClicked(selected) {
            debugger;
            const to = '/' + selected;
            if(selected === 'logout')
            {
                AuthService.logout();
                navigate("/login");
            }
            else if (window.location.pathname !== to) {
                navigate(to);
            }
         } 
         

        return (
            <>
              <SideNav
                    expanded={expanded}
                    onToggle={(expanded) => {
                        setExpanded(expanded);
                    }}
                    onSelect={onMenuItemClicked}
                >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                     {currentUser && (<h6>{currentUser.email}</h6>)}
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="users">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                        Users
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="about">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            About
                        </NavText>
                    </NavItem>
                    {currentUser && (
                            <NavItem eventKey="logout">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Logout
                            </NavText>
                        </NavItem>
                    )}  
                </SideNav.Nav>
            </SideNav>
            <main className="main-content"  style={{
                        marginLeft: expanded ? 240 : 64,
                        padding: '15px 20px 0 20px'
                    }}>
                <Outlet></Outlet>
            </main>
        </>
        );    
}

export default Layout;