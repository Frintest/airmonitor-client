import { Screen } from "./Screen.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	screens: state.ScreensReducer.screens,
	activeScreen: state.ScreensReducer.activeScreen,
});

export default connect(mapStateToProps)(Screen);
