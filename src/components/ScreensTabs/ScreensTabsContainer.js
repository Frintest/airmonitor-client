import { ScreensTabs } from "./ScreensTabs.jsx";
import { setLastAirStateThunk } from "../../redux/screens-tabs-reducer.js";
import { CreateScreenThunk } from "../../redux/screens-tabs-reducer.js";
import { ToggleScreenThunk } from "../../redux/screens-tabs-reducer.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	state: state.ScreensTabsReducer,
});

export default connect(mapStateToProps, { setLastAirStateThunk, CreateScreenThunk, ToggleScreenThunk })(ScreensTabs);
