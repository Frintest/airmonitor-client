import { HistoryChart } from "./HistoryChart.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	zoomValue: state.AirHistoryReducer.zoom.value,
	zoomMinValue: state.AirHistoryReducer.zoom.min,
	zoomMaxValue: state.AirHistoryReducer.zoom.max,
});

export default connect(mapStateToProps, null, null, { forwardRef: true })(
	HistoryChart,
);
