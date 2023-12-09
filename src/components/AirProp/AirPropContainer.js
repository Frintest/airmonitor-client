import { AirProp } from "./AirProp.jsx";
import { connect } from "react-redux";
import { updateAirStateThunk, addAirPropHistoryThunk } from "../../redux/screens-reducer";
import { withRouter } from "../common/withRouter.jsx";

const mapStateToProps = (state) => ({
	data: state.ScreensReducer.data,
	history: state.ScreensReducer.airPropHistory,
	standards: state.ScreensReducer.standards,
	levelColors: state.ScreensReducer.levelColors,
});

export default connect(mapStateToProps, { updateAirStateThunk, addAirPropHistoryThunk })(withRouter(AirProp));
