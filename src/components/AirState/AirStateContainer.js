import AirState from "./AirState.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	state: state.ScreensReducer,
});

export default connect(mapStateToProps)(AirState);
