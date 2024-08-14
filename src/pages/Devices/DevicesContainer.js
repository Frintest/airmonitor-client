import { Devices } from "./Devices.jsx";
import { connect } from "react-redux";
import {
	updateAirStateThunk,
	getStandardsThunk,
} from "../../redux/reducers/air-data-reducer.js";
import { airStateSelector } from "../../redux/selectors/air-state-selectors.js";

const mapStateToProps = (state) => ({
	data: airStateSelector(state),
});

export default connect(mapStateToProps, {
	updateAirStateThunk,
	getStandardsThunk,
})(Devices);
