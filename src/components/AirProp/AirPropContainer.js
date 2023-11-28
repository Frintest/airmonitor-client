import React from "react";
import { AirProp } from "./AirProp.jsx";
import { connect } from "react-redux";
import { updateAirStateThunk } from "../../redux/screens-reducer";
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const withRouter = (Component) => (props) => {
	const location = useLocation();
	const navigate = useNavigate();
	const params = useParams();
	return <Component {...props} router={{ location, navigate, params }} />
};

const mapStateToProps = (state) => ({
	state: state.ScreensReducer,
});

export default connect(mapStateToProps, { updateAirStateThunk })(withRouter(AirProp));
