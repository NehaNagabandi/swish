import { templateApi } from "./api/template-api"

const getTemplateDetails = async (url) => {
    return await templateApi.getTemplateDetails(url)
}

export const templateService = {
    getTemplateDetails
}