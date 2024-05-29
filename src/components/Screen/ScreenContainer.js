import { Screen } from "./Screen.jsx";
import { updateAirStateThunk, updateScreen, updateMainScreen } from "../../redux/screens-reducer.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	screens: state.ScreensReducer.screens,
	activeScreen: state.ScreensReducer.activeScreen,
	data: state.ScreensReducer.data,
});

export default connect(mapStateToProps, { updateAirStateThunk, updateScreen, updateMainScreen })(Screen);
