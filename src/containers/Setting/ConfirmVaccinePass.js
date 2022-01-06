import ConfrimVaccinePass from "../../components/Setting/ConfrimVaccinePass";
import { connect } from "react-redux";
import { downLoadCertificate } from "../../store/actions/certificate";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        downLoadCertificate: function (dataToSubmit) {
            dispatch(downLoadCertificate(dataToSubmit))
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(ConfrimVaccinePass);