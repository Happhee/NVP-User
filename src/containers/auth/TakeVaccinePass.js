import TakeVaccinePass from '../../components/auth/TakeVaccinePass';
import { connect } from "react-redux";
import { setVaccinePass } from '../../store/actions/auth';
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        setVaccinePass: function (vaccinePassName, vaccinePassFilePath, fileName) {
            dispatch(setVaccinePass(vaccinePassName, vaccinePassFilePath, fileName));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(TakeVaccinePass);