const requestWithoutPayload = (typeConstant, loadingState = undefined) => {
    return loadingState !== undefined ? {
        type: typeConstant,
        loading: loadingState
    } : {
        type: typeConstant
    }
}

const requestWithPayload = (type, payload, loadingState = undefined) => {
    return loadingState !== undefined ? {
        type: type,
        payload: payload,
        loading: loadingState
    } : {
        type: type,
        payload: payload
    }
}

export const requestAction = {
    requestWithoutPayload,
    requestWithPayload
};