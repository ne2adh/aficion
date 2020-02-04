import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/body/Home'
import App from './components/App'
import Noticia from './components/body/Noticia'
import Categoria from './components/body/Categoria'
class AppRouter extends Component {
	constructor(...props) {
		super(...props)
	
		this.callJquery = this.callJquery.bind(this)		
	}

	callJquery() {
		
		window.$('.SearchForm').hide();
		window.$('.navbar-toggler').click(function () {
			window.$(this).hide();
			window.$('#social').hide();
			window.$('#col-menu').removeClass('col-md-8').addClass('col-md-12');
		});
		
		window.$('#search').click(function () {
			window.$('#search_input').val("");
			window.$('.SearchForm').toggle();
		});
	}

	componentDidMount() {
		this.callJquery()		
	}
	render() {
		return (
			<App>					
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/noticia/:id/:url_title" component={Noticia} />
					<Route exact path="/categoria/:idc/:url_title" component={Categoria} />
					<Route render={() => <div>404 Page Not Found</div>} />
				</Switch>
			</App>
		);
	}
}

export default AppRouter;