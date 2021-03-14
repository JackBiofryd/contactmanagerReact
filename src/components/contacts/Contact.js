import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import './contact.css'; // Not needed anymore, using bootstrap, contact.css is just an example
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
	state = {
		showContactInfo: false
	};

	render() {
		const { contactInfo } = this.props;
		const { name, email, phone, id } = contactInfo;
		const { showContactInfo } = this.state;

		return (
			<Consumer>
				{state => {
					const { dispatch } = state;

					return (
						<div className="card card-body mb-3">
							<h4>
								{name}
								{'  '}
								<i
									onClick={this.showMoreInfo}
									className="fas fa-sort-down"
									style={{ cursor: 'pointer' }}
								/>
								{/* <i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }} onClick={this.deleteContact} /> */}
								<i
									className="fas fa-times"
									style={{
										cursor: 'pointer',
										float: 'right',
										color: 'red'
									}}
									onClick={this.deleteContact.bind(
										this,
										id,
										dispatch
									)}
								/>
								<Link to={`contact/edit/${id}`}>
									<i
										className="fas fa-pencil-alt"
										style={{
											cursor: 'pointer',
											float: 'right',
											color: 'black',
											marginRight: '1rem'
										}}></i>
								</Link>
							</h4>
							{showContactInfo ? (
								<ul className="list-group">
									<li className="list-group-item">
										Email: {email}
									</li>
									<li className="list-group-item">
										Phone: {phone}
									</li>
								</ul>
							) : null}
						</div>
					);
				}}
			</Consumer>
		);
	}

	showMoreInfo = () => {
		// console.log(this.state); // Doesnt work without bind, or we can just turn showMoreInfo into an arrow function

		// State is immutable, cannot be directly changed
		// this.state = {
		//     showContactInfo: false
		// }

		// Insead, use this.setState()
		this.setState({ showContactInfo: !this.state.showContactInfo });
	};

	deleteContact = async (id, dispatch) => {
		// this.props.deleteContactHandler();
		try {
			await axios.delete(
				`https://jsonplaceholder.typicode.com/users/${id}`
			);
			dispatch({
				type: 'DELETE_CONTACT',
				payload: id
			});
		} catch (err) {
			console.error(err);
			dispatch({
				type: 'DELETE_CONTACT',
				payload: id
			});
		}
	};
}

Contact.propTypes = {
	contactInfo: PropTypes.object.isRequired
	// deleteContactHandler: PropTypes.func.isRequired
};

export default Contact;
