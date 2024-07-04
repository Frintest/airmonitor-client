import { RangeDate } from "./RangeDate.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	date: state.RangeDateReducer.date,
});

export default connect(mapStateToProps)(RangeDate);
