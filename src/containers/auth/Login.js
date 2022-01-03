import Login from "../../components/auth/Login";
import { connect } from "react-redux";
// import { login } from '../../store/actions/authAction';

import { login } from "../../store/actions/auth";


function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        onPressLogin: async (dataToSubmit) => {
            dispatch(login(dataToSubmit));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Login);