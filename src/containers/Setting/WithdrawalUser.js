import WithdrawalUser from "../../components/Setting/WithdrawalUser";
import { deleteUser } from "../../store/actions/user";
import { connect } from "react-redux";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        deleteUser: function (dataToSubmit) {
            dispatch(deleteUser(dataToSubmit))
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(WithdrawalUser);