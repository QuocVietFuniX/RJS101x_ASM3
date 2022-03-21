import * as ActionTypes from "./ActionTypes";

export const StaffsSalary = (
  state = {
    isLoading: true,
    errMess: null,
    staffsSalary: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_STAFFSSALARY:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        staffsSalary: action.payload
      };

    case ActionTypes.STAFFSSALARY_LOADING:
      return { ...state, isLoading: true, errMess: null, staffsSalary: [] };

    case ActionTypes.STAFFSSALARY_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        staffsSalary: []
      };

    default:
      return state;
  }
};
