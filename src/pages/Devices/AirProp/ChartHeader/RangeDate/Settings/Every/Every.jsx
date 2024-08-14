import React from "react";
import s from "./Every.module.scss";

export const Every = (props) => {
	const elements = Object.values(props.every).map((item) => {
		return (
			item.isExist && (
				<li className={s.item} key={item.name}>
					<label className={s.item__label}>
						<span className={s.item__title}>{item.ui_name}</span>
						<input
							type="number"
							value={item.value}
							onChange={(evt) => {
								props.updateEveryValue(
									item.name,
									Number(evt.target.value),
								);
							}}
							min={item.min}
							max={item.max}
							className={s.item__input}
						/>
					</label>
				</li>
			)
		);
	});

	return (
		<div
			className={
				s.every + (!props.isCustomRange ? " " + s.every_notCustom : "")
			}
		>
			<p className={s.every__title}>Интервал между записями</p>
			<ul
				className={
					s.every__list +
					(!props.isCustomRange ? " " + s.every__list_notCustom : "")
				}
			>
				{elements}
			</ul>
		</div>
	);
};
