import React from "react";
import s from "./ScreenSettings.module.scss";
import { Popup } from "../../../../components/Popup/Popup.jsx";
import { ScreenSettingsElement } from "./ScreenSettingsElement/ScreenSettingsElement.jsx";
import { Button } from "../../../../components/Button/Button.jsx";

export const ScreenSettings = (props) => {
	const elements = Object.values(props.airState).map((item) => {
		const airItem = props.airState[item.sensor_name];
		const isChecked = props.screen.elements[item.sensor_name] !== undefined;

		return (
			<ScreenSettingsElement
				airItem={airItem}
				addScreenItem={props.addScreenItem}
				removeScreenItem={props.removeScreenItem}
				isChecked={isChecked}
				key={item.sensor_name}
			/>
		);
	});

	return (
		<Popup title={"Компоненты"} isVisible={props.isVisible} onClose={props.onClose}>
			<div>
				<div className={s.elements}>{elements}</div>
			</div>

			<Button
				content="Очистить экран"
				onClick={() => {
					props.onClose();
					props.clearScreen();
				}}
			/>
		</Popup>
	);
};
