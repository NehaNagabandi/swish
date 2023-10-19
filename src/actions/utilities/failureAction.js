export const failureAction = (typeConstant, error) => {
    return {
      type: typeConstant,
      payload: error,
    };
}