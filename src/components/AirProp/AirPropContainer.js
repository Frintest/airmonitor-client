import { AirProp } from "./AirProp.jsx";
import { connect } from "react-redux";
import { updateAirStateThunk } from "../../redux/screens-reducer";
import { WithRouter } from "../common/withRouter/WithRouter.jsx";

const mapStateToProps = (state) => ({
	state: state.ScreensReducer,
});

export default connect(mapStateToProps, { updateAirStateThunk })(WithRouter(AirProp));
