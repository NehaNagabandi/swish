import { templateApi } from "./api/template-api"

const getTemplateDetails = async (url) => {
    return await templateApi.getTemplateDetails(url)
}

const uploadCv = async (imageData) => {
    return await templateApi.uploadCv(imageData)
}

const applyJob = async (data) => {
    console.log(data, 'bhargav api')
    return await templateApi.applyJob(data)
}

export const templateService = {
    getTemplateDetails,
    uploadCv,
    applyJob
}