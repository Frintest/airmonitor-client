import { ScreensTabs } from "./ScreensTabs";
import { CreateScreenThunk } from "../../redux/screens-tabs-reducer";
import { ToggleScreenThunk } from "../../redux/screens-tabs-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
   state: state.ScreensTabsReducer,
});

export default connect(mapStateToProps, { CreateScreenThunk, ToggleScreenThunk })(ScreensTabs);
