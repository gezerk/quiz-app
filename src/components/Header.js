import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends React.Component {

	render() {
		return (
			<div>
				<Navbar color="faded" light>
					<NavbarBrand href="/">NLE Quiz</NavbarBrand>
					<Nav class="pull-xs-right" navbar>
						<NavItem><NavLink tag={IndexLink} to="/">Quiz</NavLink></NavItem>
						<NavItem><NavLink tag={Link} to="settings">Settings</NavLink></NavItem>
						<NavItem><NavLink tag={Link} to="reports">Reports</NavLink></NavItem>
					</Nav>
				</Navbar>
			</div>
			);
	}
}