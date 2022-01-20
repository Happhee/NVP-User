import { connect } from "react-redux";
import MyCretificate from "../../components/Home/MyCretificate";
import { postVisitData } from "../../store/actions/user";
function mapReduxStateToReactProps(state) {
    return state;
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        postVisitData: (dataToSubmit) => {
            dispatch(postVisitData(dataToSubmit));
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(MyCretificate)