import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    console.log(user)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} href={SHOP_ROUTE}>
                    BuyTech
                </NavLink>
                {user.isAuth ? 
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={'outline-light'} 
                    onClick={() => navigate.push(ADMIN_ROUTE)}
                    >
                        Admin panel
                    </Button>
                    <Button variant={'outline-light'} 
                    onClick={() => logOut()} 
                    className="ml-2"
                    >
                        Go out
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={'outline-light'} onClick={() => navigate.push(LOGIN_ROUTE)}
                    >
                        Autorization
                    </Button>
                </Nav>
                }  
            </Container>


        </Navbar>
    );
});


export default NavBar;