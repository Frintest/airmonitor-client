import React from "react";
import s from "./QuickRange.module.scss";

export const QuickRange = (props) => {
	const elements = Object.values(props.quickRange).map((range) => {
		return (
			<li
				className={s.quickRange__item + (range.isActive ? " " + s.quickRange__itemActive : "")}
				onClick={() => {
					props.setActiveQuickRange(range.name);
					props.filterIntervalLabels(range.name);
				}}
				key={range.name}
			>
				{range.ui_name}
			</li>
		);
	});

	return <ul className={s.quickRange}>{elements}</ul>;
};
