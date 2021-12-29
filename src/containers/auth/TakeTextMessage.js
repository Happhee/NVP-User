import TakeTextMessage from "../../components/auth/TakeTextMessage";
import { connect } from "react-redux";

import { postMessage, getMessage, initMessage, successMessage } from "../../store/actions/authAction";
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
        },
        successMessage: function (uniqueId, name, phoneNumber) {
            dispatch(successMessage(uniqueId, name, phoneNumber));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(TakeTextMessage);