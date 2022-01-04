import Splash from '../../components/auth/Splash';
import { connect } from 'react-redux';
import { autoLogin } from '../../store/actions/login';


function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        goMain: function (dataToSubmit) {
            dispatch(autoLogin(dataToSubmit));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Splash);