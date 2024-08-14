import React from "react";
import s from "./ResetZoom.module.scss";

export const ResetZoom = React.forwardRef((props, ref) => {
	const onClick = () => {
		if (ref) {
			ref.current.resetZoom();
		}
	};

	return (
		<button className={s.ResetZoom} onClick={onClick}>
			Сбросить зумирование
		</button>
	);
});
