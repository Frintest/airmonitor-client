import { Screen } from "./Screen.jsx";
import { updateAirStateThunk, updateAirHistoryThunk } from "../../redux/screens-reducer.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	screens: state.ScreensReducer.screens,
	activeScreen: state.ScreensReducer.activeScreen,
});

export default connect(mapStateToProps, { updateAirStateThunk, updateAirHistoryThunk })(Screen);
