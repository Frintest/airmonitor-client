import { Screen } from "./Screen.jsx";
import { updateScreen, updateMainScreen } from "../../redux/reducers/screens-reducer.js";
import { updateAirStateThunk } from "../../redux/reducers/air-data-reducer.js";
import { connect } from "react-redux";
import { airStateSelector } from "../../redux/selectors/air-state-selectors.js";
import { screenSelector } from "../../redux/selectors/screens-selectors.js";

const mapStateToProps = (state) => ({
	airState: airStateSelector(state),
	screen: screenSelector(state),
	activeScreen: state.ScreensReducer.activeScreen,
});

export default connect(mapStateToProps, { updateAirStateThunk, updateScreen, updateMainScreen })(Screen);
