import TakeTextMessage from "../../components/auth/TakeTextMessage";
import { connect } from "react-redux";

import { postMessage } from "../../store/actions/authAction";
import { login } from "../../store/actions/userAction";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        postMessage: function (phoneNumber) {
            dispatch(postMessage(phoneNumber));
        },
        getMessageNumber: function (phoneNumber) {
            dispatch()
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(TakeTextMessage);