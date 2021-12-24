import TakeTextMessage from "../../components/auth/TakeTextMessage";
import { connect } from "react-redux";
import { login } from "../../store/actions/userAction";

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

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(TakeTextMessage);