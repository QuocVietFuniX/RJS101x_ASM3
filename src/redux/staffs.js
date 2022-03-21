import * as ActionTypes from "./ActionTypes";

export const Staffs = (
  state = {
    isLoading: false,
    errMess: null,
    staffs: []
  },
  action
) => {
  switch (action.type) {
    //FETCH
    case ActionTypes.STAFFS_LOADING:
      return { ...state, isLoading: true };

    case ActionTypes.FETCH_STAFFS_SUCESS:
      return {
        ...state,
        isLoading: false,
        staffs: action.payload
      };

    case ActionTypes.FETCH_STAFFS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload
      };

    //ADD STAFF
    case ActionTypes.ADD_STAFF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        staffs: action.payload
      };

    //DELETE
    case ActionTypes.DELETE_STAFF_LOADING:
      return { ...state, isLoading: true, errMess: null, staffs: [] };

    case ActionTypes.DELETE_STAFF_SUCCESS:
      const filteredStaffs = state.staffs.filter(
        (staff) => staff.id !== action.payload
      );
      return { ...state, isLoading: false, staffs: filteredStaffs };

    //UPDATE
    case ActionTypes.UPDATE_STAFFS_SUCCESS:
      return {
        ...state,
        staffs: action.payload
      };

    default:
      return state;
  }
};
