import { AirProp } from "./AirProp.jsx";
import { connect } from "react-redux";
import { updateAirHistoryThunk } from "../../../redux/reducers/air-history-reducer.js";
import { airStateSelector } from "../../../redux/selectors/air-state-selectors.js";

const mapStateToProps = (state) => ({
	airState: airStateSelector(state),
	history: state.AirHistoryReducer.history,
	standards: state.AirStateReducer.standards,
	levelColors: state.ScreensReducer.levelColors,
	sendRangeInfoTrigger: state.RangeDateReducer.sendRangeInfoTrigger,
});

export default connect(mapStateToProps, { updateAirHistoryThunk })(AirProp);
