import { connect } from "react-redux";
import SettingMain from "../../components/Setting/SettingMain";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {

    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(SettingMain);