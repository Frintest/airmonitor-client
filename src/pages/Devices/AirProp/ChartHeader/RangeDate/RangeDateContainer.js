import { RangeDate } from "./RangeDate.jsx";
import { connect } from "react-redux";
import { setActiveQuickRange } from "../../../../../redux/reducers/range-date-reducer.js";

const mapStateToProps = (state) => ({
	airStateInfo: state.AirStateReducer.info,
	quickRange: state.RangeDateReducer.quickRange,
	isCustomRange: state.RangeDateReducer.quickRangeActive === 0,
	history: state.AirHistoryReducer.history,
});

export default connect(mapStateToProps, { setActiveQuickRange })(RangeDate);
