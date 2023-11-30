import { axiosClient } from "./axiosClient";

export const templateApi = {

    getTemplateDetails: (url) => {
        const getUrl = `api/template/byUrl/${url}`;
        return axiosClient.get(getUrl)
    },

    uploadCv: (data) => {
        const url = `/api/applicant-database/upload/cv`;
        const formData = new FormData();
        formData.append('file', data);
        return axiosClient.post(url, formData, {
            headers: {
                accept: '*/*',
                'content-type': 'multipart/form-data',
            },
        });
    },

    applyJob: (data) => {
        const url = `/api/applicant-database`
        return axiosClient.post(url, data)
    }
}
