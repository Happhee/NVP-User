
import CheckCertificate from "../../components/auth/CheckCertificate";
import { connect } from "react-redux";
import { signup } from "../../store/actions/auth";


function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        signup: function (dataToSubmit) {
            dispatch(signup(dataToSubmit));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(CheckCertificate);