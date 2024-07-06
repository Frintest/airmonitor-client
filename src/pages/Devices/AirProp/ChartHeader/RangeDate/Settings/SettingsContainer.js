import { Settings } from "./Settings.jsx";
import { connect } from "react-redux";
import {
	setActiveQuickRange,
	getDateInterval,
	getInfoEvery,
	sendRangeInfoThunk,
	updateEveryValue,
	updateEveryExist,
	filterIntervalLabels,
} from "../../../../../../redux/reducers/range-date-reducer.js";
import {
	updateAirHistoryThunk,
} from "../../../../../../redux/reducers/air-history-reducer.js";

const mapStateToProps = (state) => {
	const quickRange = state.RangeDateReducer.quickRange;
	const active = state.RangeDateReducer.quickRangeActive;

	return {
		quickRange,
		isCustomRange: active === "custom",
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
	updateEveryValue,
	updateEveryExist,
	filterIntervalLabels,
	updateAirHistoryThunk,
};

export default connect(mapStateToProps, mapStateToDispatch)(Settings);
