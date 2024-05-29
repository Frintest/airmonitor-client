import { ScreensControls } from "./ScreensControls.jsx";
import {
	setActiveScreen,
	clearScreen,
	addScreenItem,
	removeScreenItem
} from "../../redux/screens-reducer.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	const screens = state.ScreensReducer.screens;
	const activeScreen = state.ScreensReducer.activeScreen;
	const screen = screens[activeScreen];
	const airState = state.AirStateReducer.data;

	return {
		airState,
		screens,
		activeScreen: screen,
	};
};

export default connect(mapStateToProps, {
	setActiveScreen,
	clearScreen,
	addScreenItem,
	removeScreenItem
})(ScreensControls);
