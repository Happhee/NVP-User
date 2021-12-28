
import CheckCertificate from "../../components/auth/CheckCertificate";
import { connect } from "react-redux";


function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        onConfirm: function () {
            dispatch();
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(CheckCertificate);