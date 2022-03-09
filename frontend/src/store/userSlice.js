import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const logUser = createAsyncThunk("user/logUser", async () => {
	/*     const response = await client.get('/fakeApi/posts') 

     aqui el POST  con el email y la contraseña. si esta correcto, devuelve el objeto user con todas sus propiedades.


    return response.data */
});

//quizas no sea necesario el async thunk porque el dispatch se ejecutara dentro del try @Login linea 32. y guardara lo que le devuelva dentro del slice user

const initialState = {
	value: null,
	/* 	status: "idle",
	error: "", */
};

// despues usaremos el   dispatch(login(<La respuesta de la API>)) y hay que restringir
//de alguna manera en el momento q el login esta incorrecto, dejar ese user.value como null//ver linea29

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			//if action.payload no es el objeto usuario con sus propiedades, dejar el value como null
			// y mandar notifiacion de que alguna credencial esta mala.
			state.value = action.payload;
		},
		logout: (state) => {
			state.value = null;
		},
	},
	/* 	extraReducers(builder) {
		builder
			.addCase(logUser.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(logUser.fulfilled, (state, action) => {
				state.status = "succeeded";

				state.value = action.payload;
			})
			.addCase(logUser.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	}, */
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.value;

export default userSlice.reducer;
