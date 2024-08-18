import { HistoryChart } from "./HistoryChart.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	chartHeight: state.ChartZoomReducer.chartHeight,
});

export default connect(mapStateToProps, null, null, { forwardRef: true })(
	HistoryChart,
);
