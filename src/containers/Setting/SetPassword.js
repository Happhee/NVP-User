import { connect } from "react-redux";
import { setPassword } from "../../store/actions/auth";
import SetPasswordUser from "../../components/Setting/SetPasswordUser";
import { modifyPassword } from "../../store/actions/user";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        modifyPassword: function (dataToSubmit) {
            dispatch(modifyPassword(dataToSubmit));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(SetPasswordUser);