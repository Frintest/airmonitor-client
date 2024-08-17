import React from "react";
import s from "./Zoom.module.scss";

export const Zoom = React.forwardRef((props, ref) => {
	const onClickResetZoom = () => {
		if (ref) {
			ref.current.resetZoom();
		}
	};

	const onClickUpZoom = () => {
		if (ref) {
			ref.current.zoom(1.1);
		}
	};

	const onClickDownZoom = () => {
		if (ref) {
			ref.current.zoom(0.9);
		}
	};

	return (
		<div className={s.zoom}>
			<p className={s.zoom__name}>Зумирование</p>
			<button className={s.zoom__btn} onClick={onClickUpZoom}>
				<svg
					className={s.zoom__icon}
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M13.8172 4.84315L12.6387 3.66463L11.1125 5.19081L11.1125 1.54921L9.45079 1.54921L9.45079 5.19081L7.92462 3.66463L6.74611 4.84315L10.2816 8.37868L13.8172 4.84315ZM6.74611 15.1569L7.92462 16.3354L9.45079 14.8092L9.45079 18.4508H11.1125L11.1125 14.8092L12.6387 16.3354L13.8172 15.1569L10.2816 11.6213L6.74611 15.1569Z"
						fill="#0F172A"
					/>
				</svg>
				<span className={s.zoom__diff}>+10%</span>
			</button>

			<button className={s.zoom__btn} onClick={onClickDownZoom}>
				<svg
					className={s.zoom__icon}
					width="20"
					height="21"
					viewBox="0 0 20 21"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6.44975 5.55025L9.16032 5.55025L9.14854 8.94437H10.822L10.8102 5.55025L13.5208 5.55025L9.98528 2.01472L6.44975 5.55025ZM13.5208 15.4497L10.8102 15.4497L10.822 12.0556H9.14854L9.16032 15.4497L6.44975 15.4497L9.98528 18.9853L13.5208 15.4497Z"
						fill="#0F172A"
					/>
				</svg>
				<span className={s.zoom__diff}>+10%</span>
			</button>

			<button
				className={s.zoom__btn + " " + s.zoom__reset}
				onClick={onClickResetZoom}
			>
				Сбросить
			</button>
		</div>
	);
});
