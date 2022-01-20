import { connect } from "react-redux";
import Logout from "../../components/Setting/Logout";
import { logout } from "../../store/actions/user";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        logout: function () {
            dispatch(logout())
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Logout);