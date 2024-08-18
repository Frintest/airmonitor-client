import { connect } from "react-redux";
import { ChartHeader } from "./ChartHeader.jsx";
import { updateZoom } from "../../../../redux/reducers/air-history-reducer.js";

const mapStateToProps = (state) => {
	return {
		zoomValue: state.AirHistoryReducer.zoom.value,
		zoomProcentValue: state.AirHistoryReducer.zoom.procentValue,
	};
};

export default connect(mapStateToProps, { updateZoom }, null, {
	forwardRef: true,
})(ChartHeader);
