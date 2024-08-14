import React from "react";
import s from "./NotFound.module.scss";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
	return (
		<div className={s.container}>
			<p>
				Страница не найдена
				<NavLink to="/devices" className={s.link}>
					вернуться на главную
				</NavLink>
			</p>
		</div>
	);
};
