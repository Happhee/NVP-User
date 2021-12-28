import TakeTextMessage from "../../components/auth/TakeTextMessage";
import { connect } from "react-redux";
import { isPhoneNumber } from '../../store/actions/authAction';
import { login } from "../../store/actions/userAction";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        checkPhoneNumber: function (phoneNumber) {
            dispatch(isPhoneNumber(phoneNumber));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(TakeTextMessage);