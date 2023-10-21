import StateAir from "./StateAir.jsx";
import { setLastAirStateThunk } from "../../redux/screens-tabs-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	state: state.ScreensTabsReducer,
});

export default connect(mapStateToProps, { setLastAirStateThunk })(StateAir);
