import TakeTextMessage from "../../components/auth/TakeTextMessage";
import { connect } from "react-redux";

import { postMessage, getMessage, initMessage } from "../../store/actions/authAction";
import { login } from "../../store/actions/userAction";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        postMessage: function (phoneNumber) {
            dispatch(postMessage(phoneNumber));
        },
        getMessage: function (phoneNumber) {
            dispatch(getMessage(phoneNumber))
        },
        initMessage: function () {
            dispatch(initMessage());
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(TakeTextMessage);