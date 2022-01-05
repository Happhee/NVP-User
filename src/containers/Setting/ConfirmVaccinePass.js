import ConfrimVaccinePass from "../../components/Setting/ConfrimVaccinePass";
import { connect } from "react-redux";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {

    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(ConfrimVaccinePass);