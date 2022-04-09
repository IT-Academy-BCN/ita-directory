import React, {useEffect, useCallback} from "react";
import {Route, Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";
import axiosInstance from "../../../utils/axiosInstance";
import {login} from "../../../store/userSlice";

const ProtectedRoute = ({children, ...rest}) => {
	const token = localStorage.getItem("token");

	const dispatch = useDispatch();

	const getUser = useCallback(async () => {
		const userData = await axiosInstance
			.get(`/users/v1/get_me`)
			.then((response) => response.data);

		if (userData) dispatch(login(userData));
	}, [dispatch]);

	useEffect(() => {
		getUser();
	}, [getUser]);

	return <Route {...rest}>{!token ? <Redirect to="/login" /> : children}</Route>;
};

export default ProtectedRoute;
