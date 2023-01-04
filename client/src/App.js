import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useContext, setTimeout } from "react";
import { Spinner } from "react-bootstrap";
import {BrowserRouter} from 'react-router-dom';
import {check} from "./http/userAPI";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { Context } from "./index";

const App = observer( () => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            check().then(data => {
                user.setUser(true)
                user.setIsAuth(true)
            }).finally(() => setLoading(false))
        }, 1000)
    })

    if (loading) {
        return <Spinner animation={"grow"} />
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;