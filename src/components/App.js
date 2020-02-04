import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ScrollToTop from 'react-scroll-up'
import RawHtml from 'react-raw-html'
import { Link } from 'react-router-dom'
import friendlyUrl from 'friendly-url'
import LastNewSearch from './body/LastNewSearch'
import LastNewsList from './body/LastNewsList'
import Content from './body/Content'
import Header from './header/Header'
import Footer from './footer/Footer'
import FacebookProvider, { Page } from 'react-facebook'
import { config } from '../config'
import './App.css'
import UpScroll from '../assets/img/up_arrow_round.png'
class App extends Component {
	constructor(...props) {
		super(...props)
		this.state = {
			lastnewsList: [],
			lastnewsList2: [],
			marquesinaList: [],
			bannersup:'',
			bannermedio:'',
			bannerinf:'',
			bannerds:'',
			bannerdi:'',
			portrait3: [],
			isLoading: false
		}

		this.fetchData = this.fetchData.bind(this)
		this.handleOnSearch = this.handleOnSearch.bind(this)
	}
	fetchData() {
		fetch(config.path + 'data.php?query=lastnew')
			.then((resp) => resp.json())
			.then(data => {
				this.setState({
					lastnewsList: data.courses,
					lastnewsList2: data.courses2,
					marquesinaList: data.courses3,
					portrait3: data.courses4,
					isLoading: false
				})
			})
		fetch(config.path + 'data.php?query=banner')
			.then((resp) => resp.json())
			.then(data => {
				this.setState({
					bannersup: data.portrait.superior,
					bannermedio: data.portrait.medio,
					bannerinf: data.portrait.inferior,
					bannerds: data.portrait.cderechos,
					bannerdi: data.portrait.cderechoi
				})
			})
	}

	handleOnSearch(e) {
		e.preventDefault()
		let form = e.target
		let text = form.search_input.value
		if (text !== '') {
			fetch(config.path + 'data.php?query=search&text=' + text)
				.then((resp) => resp.json())
				.then(data => {
					this.setState({
						lastnewsList: data.courses,
						isLoading: false
					})
				})
		} else {
			this.fetchData()
		}
	}
	componentDidMount() {
		this.setState({
			isLoading: true
		})
		this.fetchData()
	}
	render() {
		const {children} = this.props;
		return (
			<div className="App">
				< Header bannersuperior={this.state.bannersup} />
				<div className="Body">
					<section id="cuerpo" className="position-relative">
						<div className="container">
							<div id="header2" className="d-none d-md-block">
								<div className="container">
									<div className="row">
										<div className="col-md-12 col-sm-12 col-xs-12">
											<div className="barra-lineas pb-2 pt-2">
												<div className="barra-titulos text-white">
													<div className="row">
														<div className="col-md-2 align-self-center">
															<span className="text-franckerGothic text-size16 pl-3">PARTIDO DEL DÍA</span>
														</div>
														<div className="col-md-10">
															{
																this.state.marquesinaList.map((portrait, i) => (
																	<div key={i} className="pull-left">
																		<span className="text-franckerSemibold text-size20 pl-3">{portrait.title}</span> <span className="text-franckerGothic text-size16 pl-3">HOY A LAS {portrait.hour}</span> <span className="text-franckerHeavy text-size25 pl-3">III</span>
																	</div>
																))
															}														
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<div id="cuerpo2" className="d-inline-block">
								<div className="container p-0 pt-4">
									<div className="row mt-5 mt-xs">
										<div className="col-md-8 col-sm-12 col-xs-12">
											<div className="banner-medio">
												<div className="text-center">
												{
													this.state.bannermedio.id ?
													<img src={this.state.bannermedio.img} alt={this.state.bannermedio.titulo} className="img-fluid"/>
													:
													''
												}														
												</div>
											</div><br/>
												<Content body={children}/>
											<br/>
											<div className="banner-inferior">
												<div className="text-center">
												{
													this.state.bannerinf.id ?
													<img src={this.state.bannerinf.img} alt={this.state.bannerinf.titulo} className="img-fluid"/>
													:
													''
												}														
												</div>
											</div><br />											
											<div id="card-large-portada">
												{
													this.state.portrait3.map(portrait => (													
														<div className="card mb-4" key={portrait.id}>
															<div className="container">
																<div className="row barra-lineas-botton-black pb-2">
																	<div className="col-md-5 p-0 ">
																		<img src={portrait.img} className="img-fluid" alt={portrait.titulo} />
																	</div>
																	<div className="col-md-7 bg-danger">
																		<div className="card-body text-white pb-1">
																			<h6 className="card-subtitle mb-2">{portrait.categoria}</h6>
																			<Link to={`/noticia/${portrait.id}/${friendlyUrl(portrait.titulo)}.html`} className="text-white">
																				<h5 className="card-title mb-3 text-franckerSemibold text-size20">{portrait.titulo}</h5>
																			</Link>
																			<div className="card-text text-capitalize text-left"><RawHtml.div>{portrait.resumen}</RawHtml.div></div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													))
												}
											</div><br />
										</div>
										<div className="col-md-4 col-sm-12 col-xs-12">
											<section id="lado-der">
												<div id="ultimas-noticias">
													<div className="card-default">
														<div className="card-header text-white">
															<span className="text-franckerHeavy text-size25">ÚLTIMAS NOTICIAS</span>
															<span className="text-white" id="search">
																<i className="fa fa-search float-right text-size25"></i>
															</span>
															<LastNewSearch onSearch={this.handleOnSearch} />
														</div>
														{
															this.state.isLoading === true ?
																<h5>Cargando...</h5> 
															:
																(<LastNewsList news={this.state.lastnewsList} />)
														}
													</div>
												</div>
												<div className="mt-2 mb-4 titulo-portada">
													<br />
													<br />
													<br />
												</div>
												<div className="banner-derecha-superior">
													<div className="text-center">
													{
														this.state.bannerds.id ?
														<img src={this.state.bannerds.img} alt={this.state.bannerds.titulo} className="img-fluid"/>
														:
														''
													}														
													</div>
												</div>
												<div className="mt-2 mb-4 titulo-portada">
													<br />
													<br />
													<br />
												</div>
												<iframe width="100%" height="515" title="www.paraelfutbol.com" frameBorder="0" src="http://www.paraelfutbol.com/lfpb/widget/prensav0501.asp"></iframe>
												<div id="ultimas-noticias">
													<div className="card-default">
														{
															this.state.isLoading === true ? 
															<h5>Cargando...</h5> 
															: 
																(<LastNewsList news={this.state.lastnewsList2} />)
														}
													</div>
												</div>												
												<div className="mt-2 mb-4 titulo-portada">
													<br />
													<br />
													<br />
												</div>
												<div className="banner-derecha-inferior">
													<div className="text-center">
													{
														this.state.bannerdi.id ?
														<img src={this.state.bannerdi.img} alt={this.state.bannerdi.titulo} className="img-fluid"/>
														:
														''
													}
													</div>
												</div>
												<div className="mt-2 mb-4 titulo-portada">
													<br />
													<br />
													<br />
												</div>
												<div id="facepage" className="text-center">																										
													< FacebookProvider appId = "2051716235141501" >
														<Page href="https://www.facebook.com/Revista-Deportiva-La-Afici%C3%B3n-1465884333649970/?fref=ts" tabs="timeline" />
													</FacebookProvider>
												</div>												
												<div className="mt-2 mb-4 titulo-portada">
													<br />
													<br />
													<br />
												</div>
											</section>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<Footer />
				<ScrollToTop showUnder={60}>
					<img src={UpScroll} alt="UP"/>
				</ScrollToTop>	
			</div>
		)
  	}
}
App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;
