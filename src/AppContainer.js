import { App } from "./App.jsx";
import { connect } from "react-redux";
import {
	updateAirStateThunk,
	getStandardsThunk,
} from "./redux/reducers/air-data-reducer.js";

export default connect(null, { updateAirStateThunk, getStandardsThunk })(App);
