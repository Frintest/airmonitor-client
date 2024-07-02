import { Settings } from "./Settings.jsx";
import { connect } from "react-redux";
import { setActiveQuickRange } from "../../../../../../redux/reducers/range-date-reducer.js";

const mapStateToProps = (state) => ({
	quickRange: state.RangeDateReducer.quickRange,
	isCustomRange: state.RangeDateReducer.quickRangeActive === 0,
});

export default connect(mapStateToProps, { setActiveQuickRange })(Settings);
