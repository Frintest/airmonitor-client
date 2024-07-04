import { Settings } from "./Settings.jsx";
import { connect } from "react-redux";
import {
	setActiveQuickRange,
	getDateInterval,
	getInfoEvery,
	sendRangeInfoThunk
} from "../../../../../../redux/reducers/range-date-reducer.js";

const mapStateToProps = (state) => {
	const quickRange = state.RangeDateReducer.quickRange;
	const active = state.RangeDateReducer.quickRangeActive;

	return {
		quickRange,
		isCustomRange: active === 0,
		activeRange: quickRange[active],
		every: state.RangeDateReducer.every,
		airInfo: state.AirStateReducer.info,
	}
};

const mapStateToDispatch = {
	setActiveQuickRange,
	getDateInterval,
	getInfoEvery,
	sendRangeInfoThunk,
};

export default connect(mapStateToProps, mapStateToDispatch)(Settings);
