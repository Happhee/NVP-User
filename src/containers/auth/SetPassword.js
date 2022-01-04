
import SetPassword from "../../components/auth/SetPassword";
import { connect } from "react-redux";
import { setPassword } from "../../store/actions/authAction";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        setPassword: function (passWord) {
            dispatch(setPassword(passWord));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(SetPassword);