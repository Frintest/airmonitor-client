import { Header } from "./Header.jsx";
import { withRouter } from "../../hoc/withRouter.jsx";
import { connect } from "react-redux";

export default connect()(withRouter(Header));
