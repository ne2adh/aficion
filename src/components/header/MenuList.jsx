import React, { Component } from 'react'
import friendlyUrl from 'friendly-url'
import {  Link } from "react-router-dom"
class MenuList extends Component {	
	render() {
		window.$('#close-button').click(function () {
			window.$('.navbar-toggler').click();
			setTimeout(() => {
				window.$('#col-menu').removeClass('col-md-12').addClass('col-md-8');
				window.$('.navbar-toggler').show();
				window.$('#social').show();
			}, 500); 			
		});		
		return (
			<div>
				<ul className="navbar-nav">
					{

						this.props.menuItems.map(function (menuItem, i) {
							if (menuItem.nodes !== undefined) {
								return (
									<li key={i} className="nav-item dropdown">
										<Link to="/" className="nav-link text-francker text-size16 dropdown-toggle">{menuItem.text}</Link>
										<ul className="dropdown-menu">
											{
												menuItem.nodes.map(function (subMenu, i) {
													return (
														<li key={i}><Link to={`/categoria/${subMenu.id}/${friendlyUrl(subMenu.text)}.html`} className="nav-link text-francker text-size16">{subMenu.text}</Link></li>
													)
												})
											}
										</ul>
									</li>
								)
							} else {
								return (
									<li key={i} className="nav-item"><Link to="/" className="nav-link text-francker text-size16">{menuItem.text}</Link></li>
								)
							}
						})
					}
					<li className="nav-item" id="close-button">
						<button type="button" className="close" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</li>
				</ul>
			</div>	
		);
	}
}

export default MenuList