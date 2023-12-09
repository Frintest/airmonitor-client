import AirState from "./AirState.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	screens: state.ScreensReducer.screens,
	activeScreenIndex: state.ScreensReducer.activeScreenIndex,
});

export default connect(mapStateToProps)(AirState);
