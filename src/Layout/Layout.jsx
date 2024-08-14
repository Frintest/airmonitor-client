import React from "react";
import s from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header.jsx";

export const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};
