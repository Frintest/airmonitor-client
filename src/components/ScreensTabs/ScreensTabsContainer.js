import { ScreensTabs } from "./ScreensTabs.jsx";
import { updateAirStateThunk, CreateScreenThunk, ToggleScreensThunk, RemoveScreenThunk } from "../../redux/screens-reducer.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	state: state.ScreensReducer,
});

export default connect(mapStateToProps, { updateAirStateThunk, CreateScreenThunk, ToggleScreensThunk, RemoveScreenThunk })(ScreensTabs);
