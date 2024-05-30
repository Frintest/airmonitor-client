import { App } from "./App.jsx";
import { connect } from "react-redux";
import { airStateSelector } from "./redux/selectors/air-state-selectors.js";

const mapStateToProps = (state) => ({
	data: airStateSelector(state),
});

export default connect(mapStateToProps)(App);
