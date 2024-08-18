import React from "react";
import s from "./ChartHeader.module.scss";
import RangeDateContainer from "./RangeDate/RangeDateContainer.js";
import { Zoom } from "./Zoom/Zoom.jsx";

export const ChartHeader = (props) => {
	const [isVisible, setVisible] = React.useState(false);

	return (
		<div className={s.chartHeader}>
			<RangeDateContainer
				sensor_name={props.sensor_name}
				isVisible={isVisible}
				onClose={() => setVisible(false)}
				onOpen={() => setVisible(true)}
			/>
			{props.isHistoryExist && (
				<Zoom
					zoomValue={props.zoomValue}
					valueStep={props.valueStep}
					resetZoom={props.resetZoom}
					increaseZoom={props.increaseZoom}
					decreaseZoom={props.decreaseZoom}
				/>
			)}
		</div>
	);
};
