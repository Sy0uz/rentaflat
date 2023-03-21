import React from "react";
import AgenciesPage from "../pages/AgenciesPage";
import AgencyPage from "../pages/AgencyPage";
import ErrorPage from "../pages/ErrorPage";
import FlatPage from "../pages/FlatPage";
import HomePage from "../pages/HomePage";

export interface IRoute {
    path: string;
    component: React.ComponentType;
}

export enum RoutePath {
    HOME = "/home",
    AGENCIES = "/agency",
    FLAT = "/flat/:id",
    AGENCY = "/agency/:id",
    ERROR = "/error"
}

export const routes: IRoute[] = [
    { path: RoutePath.HOME, component: HomePage },
    { path: RoutePath.FLAT, component: FlatPage },
    { path: RoutePath.AGENCY, component: AgencyPage },
    { path: RoutePath.ERROR, component: ErrorPage },
    { path: RoutePath.AGENCIES, component: AgenciesPage }
]