
import CheckCertificate from "../../components/auth/CheckCertificate";
import { connect } from "react-redux";
import { signup } from "../../store/actions/auth";
import { uploadCertificate } from "../../store/actions/certificate";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        signup: function (dataToSubmit) {
            dispatch(signup(dataToSubmit));
        },
        uploadCertificate: (formData) => {
            dispatch(uploadCertificate(formData))
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(CheckCertificate);