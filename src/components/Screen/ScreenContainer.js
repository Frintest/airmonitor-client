import { Screen } from "./Screen.jsx";
import { updateScreen, updateMainScreen } from "../../redux/screens-reducer.js";
import { updateAirStateThunk } from "../../redux/air-state-reducer.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	screens: state.ScreensReducer.screens,
	activeScreen: state.ScreensReducer.activeScreen,
	airState: state.AirStateReducer.data,
});

export default connect(mapStateToProps, { updateAirStateThunk, updateScreen, updateMainScreen })(Screen);
