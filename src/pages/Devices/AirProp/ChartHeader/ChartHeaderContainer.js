import { connect } from "react-redux";
import { ChartHeader } from "./ChartHeader.jsx";
import { updateZoom } from "../../../../redux/reducers/air-history-reducer.js";

const mapStateToProps = (state) => {
	return {
		zoom: state.AirHistoryReducer.zoom,
	};
};

export default connect(mapStateToProps, { updateZoom }, null, {
	forwardRef: true,
})(ChartHeader);
