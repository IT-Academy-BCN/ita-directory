<<<<<<< HEAD
import axios from 'axios'
=======
// import axios from "axios";
>>>>>>> develop

export const refresh = () => {
  window.location.reload()
}

export const redirectHome = () => {
  document.location.href = '/'
}

export const logout = () => {
<<<<<<< HEAD
  localStorage.removeItem('itacademy')
  refresh()
}
=======
	localStorage.removeItem("itacademy");
	refresh();
	return;
};

// const login = (data) => {
// 	try {
// 		const response;
// 	} catch (err) {
// 		console.log(err);
// 	}
// };
>>>>>>> develop
