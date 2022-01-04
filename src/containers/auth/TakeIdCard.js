
import TakeIdCard from "../../components/auth/TakeIdCard";
import { connect } from "react-redux";
import { setIdCard } from "../../store/actions/auth";

function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        setIdCard: function (idCardName, idCardFilePath) {
            dispatch(setIdCard(idCardName, idCardFilePath));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(TakeIdCard);