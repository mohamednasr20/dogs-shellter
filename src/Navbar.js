import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
	render() {
		const dogLinks = this.props.dogs.map((dog) => (
			<li className="nav-item" key={dog.name}>
				<NavLink className="nav-link" to={`/dogs/${dog.name}`}>
					{dog.name}
				</NavLink>
			</li>
		));
		return (
			<nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
				<Link className="navbar-brand" to="/dogs">
					Dog App
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-aria-expanded="false"
					aria-label="Toggle-navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink to="/dogs" className="nav-link" exact to="/dogs">
								Home
							</NavLink>
						</li>
						{dogLinks}
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
