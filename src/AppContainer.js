import { App } from "./App.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	data: state.AirStateReducer.data,
});

export default connect(mapStateToProps)(App);
