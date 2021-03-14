import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
// import { v1 as uuid } from "uuid";
import axios from 'axios';

class EditContact extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		errors: {}
	};

	async componentDidMount() {
		const { id } = this.props.match.params;
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/users/${id}`
		);

		const { name, phone, email } = response.data;
		this.setState({
			name,
			email,
			phone
		});
	}

	render() {
		const { name, email, phone, errors } = this.state;

		return (
			<Consumer>
				{state => {
					const { dispatch } = state;

					return (
						<div className="card mb-3">
							<div className="card-header">Edit Contact</div>
							<div className="card-body">
								<form
									onSubmit={this.onSubmit.bind(
										this,
										dispatch
									)}>
									<TextInputGroup
										label="Name"
										name="name"
										placeholder="Enter Name..."
										value={name}
										onChange={this.onChange}
										error={errors.name}
									/>
									<TextInputGroup
										label="Email"
										type="email"
										name="email"
										placeholder="Enter Email..."
										value={email}
										onChange={this.onChange}
										error={errors.email}
									/>
									<TextInputGroup
										label="Phone"
										name="phone"
										placeholder="Enter Phone..."
										value={phone}
										onChange={this.onChange}
										error={errors.phone}
									/>
									<input
										type="submit"
										value="Update Contact"
										className="btn btn-light btn-block"
									/>
								</form>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	onSubmit = async (dispatch, e) => {
		e.preventDefault();

		const { name, email, phone } = this.state;

		// Check for Errors
		if (name === '') {
			this.setState({ errors: { name: 'Name is required' } });
			return;
		}
		if (email === '') {
			this.setState({ errors: { email: 'Email is required' } });
			return;
		}
		if (phone === '') {
			this.setState({ errors: { phone: 'Phone is required' } });
			return;
		}

		const updContact = {
			name,
			email,
			phone
		};

		const { id } = this.props.match.params;

		const response = await axios.put(
			`https://jsonplaceholder.typicode.com/users/${id}`,
			updContact
		);

		dispatch({ type: 'UPDATE_CONTACT', payload: response.data });

		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {}
		});

		// Redirect back to main page
		this.props.history.push('/');
	};
}

export default EditContact;
