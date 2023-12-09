import { ScreensTabs } from "./ScreensTabs.jsx";
import { updateAirStateThunk, toggleScreens, clearScreen, addAirPropInScreen, removeAirPropInScreen } from "../../redux/screens-reducer.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	data: state.ScreensReducer.data,
	screens: state.ScreensReducer.screens,
	checkboxScreenSettings: state.ScreensReducer.checkboxScreenSettings,
	activeScreenIndex: state.ScreensReducer.activeScreenIndex,
});

export default connect(mapStateToProps, { updateAirStateThunk, toggleScreens, clearScreen, addAirPropInScreen, removeAirPropInScreen })(ScreensTabs);
