import { connect } from "react-redux";
import MyCretificate from "../../components/Home/MyCretificate";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {

    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(MyCretificate)