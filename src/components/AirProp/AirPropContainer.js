import { AirProp } from "./AirProp.jsx";
import { connect } from "react-redux";
import { updateAirHistoryThunk } from "../../redux/air-history-reducer.js";
import { withRouter } from "./../../hoc/withRouter.jsx";

const mapStateToProps = (state) => ({
	airState: state.AirStateReducer.data,
	history: state.AirHistoryReducer.history,
	standards: state.ScreensReducer.standards,
	levelColors: state.ScreensReducer.levelColors,
});

export default connect(mapStateToProps, { updateAirHistoryThunk })(withRouter(AirProp));
