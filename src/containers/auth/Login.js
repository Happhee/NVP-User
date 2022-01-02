import Login from "../../components/auth/Login";
import { connect } from "react-redux";
import { login } from '../../store/actions/authAction';


function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        onPressLogin: function (uniqueId, passWord) {
            dispatch(login(uniqueId, passWord));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Login);