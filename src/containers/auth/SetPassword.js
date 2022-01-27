import SetPassword from "../../components/auth/SetPassword";
import { connect } from "react-redux";
import { setPassword } from "../../store/actions/auth";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        setPassword: function (password) {
            dispatch(setPassword(password));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(SetPassword);