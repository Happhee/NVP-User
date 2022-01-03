import { finshLoading, startLoading } from "../store/modules/loading";

export default function createRequestThunk(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return (params) => async (dispatch) => {
        dispatch({ type });
        dispatch(startLoading(type));
        try {
            const response = await request(params);
            dispatch({ type: SUCCESS, payload: response.data });
            dispatch(finshLoading(type));
        } catch (e) {
            dispatch({
                type: FAILURE,
                payload: e,
            })
            dispatch(startLoading(type));
        }
    };
}
