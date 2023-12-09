import { AirProp } from "./AirProp.jsx";
import { connect } from "react-redux";
import { updateAirStateThunk, addAirPropHistoryThunk } from "../../redux/screens-reducer";
import { WithRouter } from "./../common/WithRouter/WithRouter.jsx";

const mapStateToProps = (state) => {
	console.log('update');
	return ({
		state: state.ScreensReducer,
	});
}
export default connect(mapStateToProps, { updateAirStateThunk, addAirPropHistoryThunk })(WithRouter(AirProp));
