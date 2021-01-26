import React, { Component } from 'react'

export class Registration extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nombreUsuario: '',
      email: ''
    }
  }

	changeName() {
		this.setState({nombreUsuario: "Kevin"});
	}
	render() {
		return <div>Aquí va la info de registration</div>;
	}
}

export default Registration
