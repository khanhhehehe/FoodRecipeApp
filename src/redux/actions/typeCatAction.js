export const setTypeCat = (myType) => {
  return {
    type: "SET_TYPECAT",
    payload: myType
  };
};
export const setFilter = (value) => {
  return {
    type: "SET_FILTER",
    payload: value
  };
};