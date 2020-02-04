import React, { Component } from 'react'
import MenuList from './MenuList'
import { config } from '../../config';
import logo from '../../assets/img/logo.png'
class Header extends Component {
	constructor(...props) {
		super(...props)
		this.state = {
			courses: '',
			isLoading: false,
			menuItems: []
		}
		this.fetchData = this.fetchData.bind(this)
	}	
	fetchData() {
		fetch(config.path + 'data.php?query=menus')
			.then((resp) => resp.json())
			.then(data => {
				this.setState({ menuItems: data.menus, isLoading: false })
			})
	}
	componentDidMount() {
		this.setState({ isLoading: true })
		this.fetchData()
	}
	render() {
		return (			
			<header id="cabeza" className="mb-3 position-relative">
				<div className="container">
					<div className="row">
						<div className="container position-relative">
							<div className="float-right my-1 text-warning2 d-none d-md-block">
								<span><i className="fa fa-phone"></i>&nbsp;Llamanos&nbsp;&nbsp;</span>
								<span><i className="fa fa-envelope"></i>&nbsp;info@aficionoruro.com&nbsp;&nbsp;</span>
								<span><i className="fa fa-glass"></i>&nbsp;Blog&nbsp;&nbsp;</span>
								<span><i className="fa fa-cog"></i>&nbsp;Mapa Web&nbsp;&nbsp;</span>
							</div>
						</div>
						<div className="container position-relative">
							<div className="row">
								<div className="col-md-12">
									{
										this.props.bannersuperior.id ?
											<img src={this.props.bannersuperior.img} alt={this.props.bannersuperior.titulo} className="img-fluid" />
											:
											''
									}
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-sm-12 col-xs-12" id="col-menu">
									<nav className="navbar navbar-expand-xl text-size20">
										<a className="navbar-brand pb-2" href="/"><img src={logo} alt="logo" /></a>
										<button id="navbar" className="navbar-toggler custom-toggler mt-5" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
											<span className="navbar-toggler-icon"></span>											
										</button>
										<div className="mt-5 collapse" id="navbarNavDropdown">
											{
												this.state.isLoading === true ? 
												<h5>Cargando...</h5> 
												:
												<MenuList menuItems={this.state.menuItems} />
											}
										</div>
									</nav>
								</div>
								<div className="col-md-4 col-sm-12 col-xs-12" id="social">
									<div className="container d-flex h-100 ">
										<div className="header-block row justify-content-center align-self-center mt-5">
											<a href="https://www.facebook.com/LaAficionOruro" className="header-button" target="_blank" rel="noopener noreferrer">
												<i className="fa fa-facebook" aria-hidden="true"></i>
											</a>
											<a href="http://www.twitter.com/LaAficionOruro" className="header-button" target="_blank" rel="noopener noreferrer">
												<i className="fa fa-twitter" aria-hidden="true"></i>
											</a>
											<a href="" className="header-button" target="_blank">
												<i className="fa fa-rss" aria-hidden="true"></i>
											</a>
											<a href="" className="header-button header-button-text">::: LA AFICION :::</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;