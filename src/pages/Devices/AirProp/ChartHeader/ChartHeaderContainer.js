import { connect } from "react-redux";
import { ChartHeader } from "./ChartHeader.jsx";
import {
	resetZoom,
	increaseZoom,
	decreaseZoom,
} from "../../../../redux/reducers/chart-zoom-reducer.js";

const mapStateToProps = (state) => ({
	zoomValue: state.ChartZoomReducer.value,
});

const mapStateToDispatch = {
	resetZoom,
	increaseZoom,
	decreaseZoom,
};

export default connect(mapStateToProps, mapStateToDispatch)(ChartHeader);
