import { templateConstants } from "../constants/template-constants";

export const getTemplateDetailsReducer = (state = { data: null, loading: false }, action) => {
    switch (action.type) {
        case templateConstants.GET_TEMPLATE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case templateConstants.GET_TEMPLATE_DETAILS_SUCCESS:
            return {
                ...state,
                data: action.payload?.data
            };
        case templateConstants.GET_TEMPLATE_DETAILS_FAILURE:
            return {
                ...state,
                loading: false
            };
        default: return state
    }
}