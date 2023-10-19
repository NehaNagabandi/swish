export const successAction = (typeConstant, data) => {
    return {
      type: typeConstant,
      payload: data,
    };
}