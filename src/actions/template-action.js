import { templateConstants } from '../constants/template-constants'
import { templateService } from '../services/template-service';
import { failureAction, requestAction, successAction } from './utilities'

const getTemplateDetails = (url) => {
    return (dispatch) => {
        dispatch(requestAction.requestWithoutPayload(templateConstants.GET_TEMPLATE_DETAILS_REQUEST, true));
        templateService.getTemplateDetails(url)
            .then((res) => {
                dispatch(successAction(templateConstants.GET_TEMPLATE_DETAILS_SUCCESS, res))
            })
            .catch((res) => {
                dispatch(failureAction(templateConstants.GET_TEMPLATE_DETAILS_FAILURE, res))
            })
    }
}


export const templateAction = {
    getTemplateDetails
}