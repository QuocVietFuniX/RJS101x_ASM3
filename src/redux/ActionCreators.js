import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

// ADD STAFF
export const addStaffSuccess = (staff) => ({
  type: ActionTypes.ADD_STAFF_SUCCESS,
  payload: staff
});

export const addStaff = (staff) => (dispatch) => {
  return fetch(baseUrl + "staffs", {
    method: "POST",
    body: JSON.stringify(staff),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addStaffSuccess(response)))
    .catch((error) => {
      console.log("Post staffs", error.message);
      alert("Your staff could not be posted\nError: " + error.message);
    });
};

// DELETE
export const deleteStaffSuccess = (id) => ({
  type: ActionTypes.DELETE_STAFF_SUCCESS,
  payload: id
});

export const deleteStaffLoading = () => ({
  type: ActionTypes.DELETE_STAFF_LOADING
});

export const deleteStaff = (id) => (dispatch) => {
  if (window.confirm("Are you sure to delete this staff?")) {
    return fetch(baseUrl + `staffs/${id}`, {
      method: "DELETE"
    }).then(() => dispatch(deleteStaffSuccess(id)));
  } else return;
};

//UPDATE
export const updateStaffSuccess = (staff) => ({
  type: ActionTypes.UPDATE_STAFFS_SUCCESS,
  payload: staff
});

export const updateStaff = (staff) => (dispatch) => {
  return fetch(baseUrl + "staffs", {
    method: "PATCH",
    body: JSON.stringify(staff),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(updateStaffSuccess(response)))
    .catch((error) => {
      console.log("Updated staffs", error.message);
      alert("Your staff could not be updated\nError: " + error.message);
    });
};

// FETCH STAFF

export const fetchStaffs = () => (dispatch) => {
  dispatch(staffsLoading(true));
  return fetch(baseUrl + "staffs")
    .then((response) => response.json())
    .then((staffs) => dispatch(fetchStaffsSuccess(staffs)))
    .catch((error) => dispatch(fetchStaffsFailed(error.message)));
};

export const fetchStaffsFailed = (errmess) => ({
  type: ActionTypes.FETCH_STAFFS_FAILED,
  payload: errmess
});

export const fetchStaffsSuccess = (staffs) => ({
  type: ActionTypes.FETCH_STAFFS_SUCESS,
  payload: staffs
});

export const staffsLoading = () => ({
  type: ActionTypes.STAFFS_LOADING
});

// FETCH DEPARTMENT
export const fetchDepartments = () => (dispatch) => {
  dispatch(departmentsLoading(true));
  return fetch(baseUrl + "departments")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((departments) => dispatch(addDepartments(departments)))
    .catch((error) => dispatch(departmentsFailed(error.message)));
};

export const departmentsLoading = () => ({
  type: ActionTypes.DEPARTMENTS_LOADING
});

export const departmentsFailed = (errmess) => ({
  type: ActionTypes.DEPARTMENTS_FAILED,
  payload: errmess
});

export const addDepartments = (departments) => ({
  type: ActionTypes.ADD_DEPARTMENTS,
  payload: departments
});

export const fetchStaffsSalary = () => (dispatch) => {
  dispatch(staffsSalaryLoading(true));
  return fetch(baseUrl + "staffsSalary")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((staffsSalary) => dispatch(addStaffsSalary(staffsSalary)))
    .catch((error) => dispatch(staffsSalaryFailed(error.message)));
};

export const staffsSalaryLoading = () => ({
  type: ActionTypes.STAFFSSALARY_LOADING
});

export const staffsSalaryFailed = (errmess) => ({
  type: ActionTypes.STAFFSSALARY_FAILED,
  payload: errmess
});

export const addStaffsSalary = (staffsSalary) => ({
  type: ActionTypes.ADD_STAFFSSALARY,
  payload: staffsSalary
});
