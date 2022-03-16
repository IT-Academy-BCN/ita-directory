import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const renewToken = createAsyncThunk("user/renewToken", async (refreshToken, thunkApi) => {
	//aqui el fetch al endpoint si el .message = "token has expired!  y 401 unauthorized "
	//fetch al otro endpoint con el refresh token
	//http://localhost:10910/users/v1/refresh-token  la
	//response seria data.data.accessToken

	const response = await axios
		.get(`${process.env.REACT_APP_API_URL}/users/v1/refresh-token`, {
			headers: {refresh: refreshToken},
		})
		.then((response) => response.data);

	return response.data.accessToken;
});
