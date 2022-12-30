import { createSlice } from "@reduxjs/toolkit";

// axios
import axios from "axios";

const url = "https://reqres.in/api/users?per_page=12";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    // some reducers for users
    setUserList: (state, action) => {
      // action.payload => user list
      state.list = action.payload;
    },
  },
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

// async function to get data from users API
export const fetchAllUsers = () => (dispatch) => {
  // a function that returns a function

  axios
    .get(url)
    .then((res) => {
      console.log(res);
      dispatch(setUserList(res.data.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
