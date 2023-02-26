import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { context } from '..';
import { publicRoutes } from "../router/"
import Loader from './UI/Loader';

const AppRouter = () => {
    const { store } = useContext(context);
    if (store.isLoading) {
        <Loader />
    }

    return (
        <Routes>

            {publicRoutes.map(route =>
                <Route
                    element={<route.element />}
                    path={route.path}
                    key={route.path}
                />
            )}


        </Routes>

    );
};

export default observer(AppRouter);
