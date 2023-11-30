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

const uploadCv = (url, cbSuccess, cbFail) => {
    return (dispatch) => {
        dispatch(requestAction.requestWithoutPayload(templateConstants.UPLOAD_RESUME_REQUEST, true));
        templateService.uploadCv(url)
            .then((res) => {
                cbSuccess(res)
                dispatch(successAction(templateConstants.UPLOAD_RESUME_SUCCESS, res))
            })
            .catch((res) => {
                cbFail(res)
                dispatch(failureAction(templateConstants.UPLOAD_RESUME_FAILURE, res))
            })
    }
}

const applyJob = (data, cbSuccess, cbFail) => {
    return (dispatch) => {
        dispatch(requestAction.requestWithoutPayload(templateConstants.APPLY_JOB_REQUEST, true));
        templateService.applyJob(data)
            .then((res) => {
                cbSuccess(res)
                dispatch(successAction(templateConstants.APPLY_JOB_SUCCESS, res))
            })
            .catch((res) => {
                cbFail(res)
                dispatch(failureAction(templateConstants.APPLY_JOB_FAILURE, res))
            })
    }
}


export const templateAction = {
    getTemplateDetails,
    uploadCv,
    applyJob
}