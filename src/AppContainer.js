import { App } from "./App.jsx";
import { connect } from "react-redux";
import { airStateSelector } from "./redux/selectors/air-state-selectors.js";
import { getStandardsThunk, updateAirStateThunk } from "./redux/reducers/air-data-reducer.js";

const mapStateToProps = (state) => ({
	data: airStateSelector(state),
});

export default connect(mapStateToProps, { updateAirStateThunk, getStandardsThunk })(App);
