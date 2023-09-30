import CurrentState from "./CurrentState";
import { getLastStateThunk } from "../../redux/get-last-state-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
   state: state.getLastNoteReducer,
});

export default connect(mapStateToProps, { getLastStateThunk })(CurrentState);
