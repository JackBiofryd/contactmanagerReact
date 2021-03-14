import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
	// Second way to add state
	// state = {
	// ...State Variables
	// }

	// Fisrt way to add state
	// constructor() {
	//     super();
	//     this.state = {
	//          ...State Variables
	//     }
	// }

	render() {
		return (
			<Consumer>
				{state => {
					const { contacts } = state;

					return (
						<React.Fragment>
							<h1 className="display-4 mb-2">
								<span className="text-danger">Contact</span>{" "}
								List
							</h1>
							{contacts.map(contact => (
								// <Contact contactInfo={contact} key={contact.id} deleteContactHandler={this.deleteContact.bind(this, contact.id)} />
								<Contact
									contactInfo={contact}
									key={contact.id}
								/>
							))}
						</React.Fragment>
					);
				}}
			</Consumer>
		);

		// const { contacts } = this.state;

		// return (
		//     // <div>
		//     // React.Fragment removes unnecessary div
		//     <React.Fragment>
		//         {contacts.map(contact => (
		//             <Contact contactInfo={contact} key={contact.id} deleteContactHandler={this.deleteContact.bind(this, contact.id)} />
		//         ))}
		//     </React.Fragment>
		//     // </div>
		// );
	}

	// deleteContact = id => {
	//     const { contacts } = this.state;
	//     const newContacts = contacts.filter(contact => contact.id !== id);
	//     this.setState({
	//         contacts: newContacts
	//     });
	// }
}

export default Contacts;
