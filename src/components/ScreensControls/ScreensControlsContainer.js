import { ScreensControls } from "./ScreensControls.jsx";
import {
	updateAirStateThunk,
	setActiveScreen,
	clearScreen,
	addAirPropInScreen,
	removeAirPropInScreen
} from "../../redux/screens-reducer.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	const screens = state.ScreensReducer.screens;
	const activeScreen = state.ScreensReducer.activeScreen;
	const screen = screens[activeScreen];
	return {
		data: state.ScreensReducer.data,
		screens: screens,
		activeScreen: screen,
	};
};

export default connect(mapStateToProps, {
	updateAirStateThunk,
	setActiveScreen,
	clearScreen,
	addAirPropInScreen,
	removeAirPropInScreen
})(ScreensControls);
