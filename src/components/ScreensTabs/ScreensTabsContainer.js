import { ScreensTabs } from "./ScreensTabs.jsx";
import { updateAirStateThunk, toggleScreensThunk, clearScreenThunk, addAirPropInScreenThunk, removeAirPropInScreenThunk } from "../../redux/screens-reducer.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	state: state.ScreensReducer,
});

export default connect(mapStateToProps, { updateAirStateThunk, toggleScreensThunk, clearScreenThunk, addAirPropInScreenThunk, removeAirPropInScreenThunk })(ScreensTabs);
