import React from "react";
// import {Route, Switch} from "react-router-dom";
// import ProtectedRoute from "components/composed/ProtectedRoute";

// // Pages
// import Home from "screens/Home";
// import Page404 from "screens/404";

// // Userflow
// import Login from "screens/UserFlow/Login";
// import Registration from "screens/UserFlow/Registration";
// import RecoverPassword from "screens/UserFlow/RecoverPassword";

import loquesea from "components/units/AsyncButton"; */

//Input
import Input from "components/units/Input/Input"
/* import axios from "axios"; */

	
const App = () => {
	//Button 
	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const handleClick = () => {
		setAnimatedState(true);
		setDisabled(true);
		setTimeout(() => {
			setAnimatedState(false);
			setDisabled(false);
		}, 5000);
	};

	// value - handleChange
	const [value, setValue] = useState("")
	console.log("value: ",value)
	const handleChange =(e) => {
	setValue(e.target.value)
	//console.log("e.target.value: ",e.target.value)	
	}
	
    // isDisabled - handleDisabled
	 const [isDisabled, setIsDisabled] = useState(false);
	//set time out
	const handleDisabled  = () => {		
		setIsDisabled(true)
        setTimeout(()=>{
            setIsDisabled(false)
        }, 3000);
    };
	
   /* const handleDisabled = async () => {
        //Mi Funcion puede ser set time out, axios, fetch o try and catch
	 setIsDisabled(true)
		try{
			await axios.get("mi-url", {params: {hola: "adios"}})
			setIsDisabled(false)
		} catch (error) {
			setIsDisabled(false)
			console.log(error)
		} */
 
	const handleFocus = () => {
		console.log("He pinchado dentro")
	} 

	const handleBlur = () => {
		console.log("He pinchado fuera")
	} 

	// Id 
	const id = (1); 

	return (
<<<<<<< HEAD
		// <Switch>
		// 	{/* Userflow */}
		// 	<Route exact path="/login" component={Login} />
		// 	<Route exact path="/registration" component={Registration} />
		// 	<Route exact path="/recover-password/:hash" component={RecoverPassword} />

		// 	{/* Caregiver */}
		// 	<ProtectedRoute exact path="/" component={Home} />
		// 	<ProtectedRoute component={Page404} />
		// </Switch>
		// <Notification />
		<div>Hola</div>
=======
		<div>
		<Input 
			type="text" 
			value={value} 
			onChange={handleChange} 
			minlength= {5} 
			disabled={isDisabled} 
			onClick={handleDisabled}
			onFocus={handleFocus} 
			onBlur={handleBlur}   
			placeholder="Placeholder..." 
			required={true}	 
			size={20}  
			id={id} 
			name={id}
			text=""
			labelStyle={{display:"flex",
			flexDirection: "column"}}
			textStyles={{ width: 297, height: 40,
			textAlign: "left", font:"normal normal normal 14px/32px Helvetica Neue",
			letterSpacing: 0, color: "#4A4A4A", opacity: 1, padding: 10, marginBottom: 20, marginLeft: 10 }}
			inputStyles={{padding: 10, marginBottom: 5, marginLeft: 10, marginTop: 5}}
			errorText=" "
			errorStyles={{
				width: 258, height: 15,
				textAlign: "left",
				font: "italic normal normal 13px/32px Helvetica Neue",
				letterSpacing: 0,
				color: '#909090',
				opacity: 1,
				padding: 10, 
				marginBottom: 40, 
				marginLeft: 10 
			}}
			className="success"
		/>
		<AsyncButton
			text="Hola clase"
			textStyles={{color: "black"}}
			iconStyles={{color: "black", marginRight: 10}}
			buttonStyles={{marginLeft: 10}}
			icon={faEye}
			iconPosition="left"
			className="success"
			onClick={handleClick}
			animated={animatedState}
			disabled={disabled}
			
		/>

		</div>
	/* 	<Switch>
			Userflow
			<Route exact path="/login" component={Login} />
			<Route exact path="/registration" component={Registration} />
			<Route exact path="/recover-password/:hash" component={RecoverPassword} />

			Caregiver 
			<ProtectedRoute exact path="/" component={Home} />
			<ProtectedRoute component={Page404} />
		</Switch> */
>>>>>>> develop
	);
};

export default App;
