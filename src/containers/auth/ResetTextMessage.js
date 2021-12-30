import ResetTextMessage from "../../components/auth/ResetTextMessage";
import { connect } from "react-redux";
import { successMessage, postMessage, getMessage, initMessage } from '../../store/actions/authAction';

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

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(ResetTextMessage);