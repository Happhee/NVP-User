import WithdrawalUser from "../../components/Setting/WithdrawalUser";

import { connect } from "react-redux";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {

    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(WithdrawalUser);