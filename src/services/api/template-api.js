import { axiosClient } from "./axiosClient";

export const templateApi = {

    getTemplateDetails: (url) => {
        const getUrl = `api/template/byUrl/${url}`;
        return axiosClient.get(getUrl)
    }
}
