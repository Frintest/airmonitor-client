import { AirProp } from "./AirProp.jsx";
import { connect } from "react-redux";
import { withRouter } from "./../../hoc/withRouter.jsx";
import { updateAirHistoryThunk } from "../../redux/reducers/air-history-reducer.js";
import { airStateSelector } from "../../redux/selectors/air-state-selectors.js";

const mapStateToProps = (state) => ({
	airState: airStateSelector(state),
	history: state.AirHistoryReducer.history,
	standards: state.ScreensReducer.standards,
	levelColors: state.ScreensReducer.levelColors,
});

export default connect(mapStateToProps, { updateAirHistoryThunk })(withRouter(AirProp));
