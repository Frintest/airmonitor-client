import { AirProp } from "./AirProp.jsx";
import { connect } from "react-redux";
import { updateAirHistoryThunk } from "../../redux/screens-reducer.js";
import { withRouter } from "./../../hoc/withRouter.jsx";

const mapStateToProps = (state) => ({
	data: state.ScreensReducer.data,
	history: state.ScreensReducer.history,
	standards: state.ScreensReducer.standards,
	levelColors: state.ScreensReducer.levelColors,
});

export default connect(mapStateToProps, { updateAirHistoryThunk })(withRouter(AirProp));
