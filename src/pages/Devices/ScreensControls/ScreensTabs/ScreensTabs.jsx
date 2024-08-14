import React from "react";
import s from "./ScreensTabs.module.scss";

export const ScreensTabs = (props) => {
	const tabs = Object.values(props.screens).map((screen) => {
		return (
			<button
				type="button"
				className={s.item + (screen.id === 0 ? " " + s.itemMain : "") + (screen.isActive ? " " + s.itemActive : "")}
				onClick={() => props.setActiveScreen(screen.id)}
				key={screen.id}
			>
				{screen.value}
			</button>
		);
	});

	return <div className={s.list}>{tabs}</div>;
};
