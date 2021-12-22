import Login from "../../components/auth/Login";
import { connect } from "react-redux";
import { loginPassword } from "../../store/actions/userAction";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        onPressLogin: function (uniqueId, passWord) {
            dispatch(loginPassword(uniqueId, passWord));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Login);