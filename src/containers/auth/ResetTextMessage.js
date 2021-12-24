import ResetTextMessage from "../../components/auth/ResetTextMessage";
import { connect } from "react-redux";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        onConfirm: function () {
            dispatch();
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(ResetTextMessage);