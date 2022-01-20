import ResetPassword from '../../components/auth/ResetPassword';
import { connect } from "react-redux";
import { setPassword } from "../../store/actions/auth";
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
export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(ResetPassword);