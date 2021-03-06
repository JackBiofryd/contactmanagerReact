import Contacts from './components/contacts/Contacts';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import { Provider } from './context';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/tests/Test';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	// Put variables and js here

	return (
		<Provider>
			<Router>
				<div className="App">
					<Header branding="Contact Manager" />
					<div className="container">
						<Switch>
							<Route exact path="/" component={Contacts} />
							<Route
								exact
								path="/contact/add"
								component={AddContact}
							/>
							<Route
								exact
								path="/contact/edit/:id"
								component={EditContact}
							/>
							{/* If you want parameters in the url */}
							{/* <Route exact path="/about/:id" component={About} /> */}
							<Route exact path="/about" component={About} />
							<Route exact path="/test" component={Test} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
