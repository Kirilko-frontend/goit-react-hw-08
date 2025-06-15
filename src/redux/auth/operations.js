import { createAsyncThunk } from "@reduxjs/toolkit";
import { resetContacts } from "../contacts/slice";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

const register = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", userData);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const login = createAsyncThunk("user/login", async (userData, thunkAPI) => {
  try {
    const res = await axios.post("/users/login", userData);
    return res.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue("No token found");
  }

  try {
    const res = await axios.post("/users/logout", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    thunkAPI.dispatch(resetContacts());

    return res.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

const refreshUser = createAsyncThunk("user/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue("No token");
  }

  try {
    const res = await axios.get("/users/current", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

export { register, login, logout, refreshUser };
