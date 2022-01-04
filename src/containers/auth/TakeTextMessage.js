import TakeTextMessage from "../../components/auth/TakeTextMessage";
import { connect } from "react-redux";
import { verifySmsMessage } from "../../store/actions/auth";
import { postMessage, expireSmsMessage } from "../../store/actions/sms";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        postMessage: function (dataToSubmit) {
            dispatch(postMessage(dataToSubmit));
        },

        expireSmsMessage: function () {
            dispatch(expireSmsMessage());
        },
        verifySmsMessage: function (id, name, phone) {
            dispatch(verifySmsMessage(id, name, phone));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(TakeTextMessage);