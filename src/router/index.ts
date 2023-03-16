import React from "react";
import ErrorPage from "../pages/ErrorPage";
import FlatPage from "../pages/FlatPage";
import HomePage from "../pages/HomePage";

export interface IRoute {
    path: string;
    component: React.ComponentType;
}

export enum RoutePath {
    HOME = "/home",
    FLAT = "/flat/:id",
    AGENCY = "/agency/:id",
    ERROR = "/error"
}

export const routes: IRoute[] = [
    { path: RoutePath.HOME, component: HomePage },
    { path: RoutePath.FLAT, component: FlatPage },
    { path: RoutePath.AGENCY, component: ErrorPage },
    { path: RoutePath.ERROR, component: ErrorPage }
]