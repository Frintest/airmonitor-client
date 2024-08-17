import React from "react";
import { useLocation } from "react-router-dom";
import { AirProp } from "./AirProp.jsx";
import { connect } from "react-redux";
import { updateAirHistoryThunk } from "../../../redux/reducers/air-history-reducer.js";
import { airStateSelector } from "../../../redux/selectors/air-state-selectors.js";

const mapStateToProps = (state) => {
	return {
		airState: airStateSelector(state),
		history: state.AirHistoryReducer.history,
		standards: state.AirDataReducer.standards,
		levelColors: state.ScreensReducer.levelColors,
	};
};

const AirPropLocation = (props) => {
	const location = useLocation();
	let path = location.pathname.split("/");
	path = path[path.length - 1];
	const airItem = props.airState[path];

	const history = props.history[airItem.sensor_name];
	const isHistoryExist = history != undefined;
	const standards = props.standards[airItem.sensor_name];

	return (
		<AirProp
			{...props}
			airItem={airItem}
			history={history}
			isHistoryExist={isHistoryExist}
			standards={standards}
		/>
	);
};

export default connect(mapStateToProps, { updateAirHistoryThunk })(
	AirPropLocation,
);
