import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../interfaces/User';

interface UserState {
  users: User[] | null;
  loading: boolean;
  errors:any
}

const initialState: UserState = {
  users: [],
  loading: false,
  errors: null
}

export const getUsers = createAsyncThunk<User[]>(
  "users/getUsers",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("http://localhost:3005/user");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
)

export const createUser = createAsyncThunk<User, Object>(
  "users/createUser",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3005/user")
    } catch (error) {

    }
  }
)

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading= true
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    })
  }
})