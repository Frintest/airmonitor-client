import { App } from "./App.jsx";
import { connect } from "react-redux";
import { airStateSelector } from "./redux/selectors/air-state-selectors.js";
import { updateAirStateThunk } from "./redux/reducers/air-state-reducer.js";

const mapStateToProps = (state) => ({
	data: airStateSelector(state),
});

export default connect(mapStateToProps, { updateAirStateThunk })(App);
