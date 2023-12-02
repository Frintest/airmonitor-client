import { ScreensTabs } from "./ScreensTabs.jsx";
import { updateAirStateThunk, toggleScreens, clearScreen, addAirPropInScreen, removeAirPropInScreen } from "../../redux/screens-reducer.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	state: state.ScreensReducer,
});

export default connect(mapStateToProps, { updateAirStateThunk, toggleScreens, clearScreen, addAirPropInScreen, removeAirPropInScreen })(ScreensTabs);
