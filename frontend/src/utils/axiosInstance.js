import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

let authToken = localStorage.getItem("token");

let refreshToken = localStorage.getItem("refreshToken");

const axiosInstance = axios.create({
	baseURL,
	headers: {Authorization: "Bearer " + authToken},
});

axiosInstance.interceptors.request.use(async (req) => {
	if (!authToken && !refreshToken) {
		authToken = localStorage.getItem("token");
		refreshToken = localStorage.getItem("refreshToken");
		req.headers.Authorization = "Bearer " + authToken;
	}
	return req;
});

axiosInstance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response.status === 401) {
			console.log("et");
			originalRequest._retry = true;
			return axios
				.get(`${process.env.REACT_APP_API_URL}/users/v1/refresh-token`, {
					headers: {refresh: refreshToken},
				})
				.then((response) => {
					if (response.status === 200) {
						localStorage.setItem("token", response.data.data.accessToken);

						originalRequest.headers.Authorization =
							"Bearer " + response.data.data.accessToken;

						return axios(originalRequest);
					}
				});
		}
		return error;
	}
);

export default axiosInstance;
