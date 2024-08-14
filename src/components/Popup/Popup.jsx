import React from "react";
import s from "./Popup.module.scss";

export const Popup = (props) => {
	return (
		props.isVisible && (
			<div className={s.wrap}>
				<div className={s.popup}>
					<div className={s.popup__header}>
						<p className={s.popup__title}>{props.title}</p>
						<button className={s.popup__closeBtn} onClick={props.onClose} />
					</div>
					{props.children}
				</div>
			</div>
		)
	);
};
