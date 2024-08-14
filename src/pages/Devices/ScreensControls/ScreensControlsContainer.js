import { ScreensControls } from "./ScreensControls.jsx";
import {
	setActiveScreen,
	clearScreen,
	addScreenItem,
	removeScreenItem,
} from "../../../redux/reducers/screens-reducer.js";
import { connect } from "react-redux";
import { airStateSelector } from "../../../redux/selectors/air-state-selectors.js";
import { screenSelector, screensSelector } from "../../../redux/selectors/screens-selectors.js";

const mapStateToProps = (state) => ({
	airState: airStateSelector(state),
	screens: screensSelector(state),
	screen: screenSelector(state),
});

export default connect(mapStateToProps, {
	setActiveScreen,
	clearScreen,
	addScreenItem,
	removeScreenItem,
})(ScreensControls);
