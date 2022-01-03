import Login from "../../components/auth/Login";
import { connect } from "react-redux";
// import { login } from '../../store/actions/authAction';

// import { login } from "../../store/actions/auth";

import { login } from "../../store/actions/login";
import login


function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        onPressLogin: (dataToSubmit) => {
            dispatch(login(dataToSubmit));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Login);