import React, { Component } from 'react'
import VideosYoutube from './VideosYoutube'
import RawHtml from 'react-raw-html'
import friendlyUrl from 'friendly-url'
import { config } from '../../config'
import { Link } from 'react-router-dom'
class Home extends Component {
	constructor(...props) {
		super(...props)
		this.state = {
			portrait: '',
			portrait2: [],
			portrait3: '',
			portrait4: '',
			portrait5: [],
			portrait6: [],
			portrait7: [],
			portrait8: '',
			isToggleOn: true,
			title: '',
			url: '',
			isLoading: false
		}
		this.fetchData = this.fetchData.bind(this)
		
		this.handleClick = this.handleClick.bind(this)
	}
	fetchData() {
		fetch(config.path + 'data.php?query=portada')
			.then((resp) => resp.json())
			.then(data => {
				this.setState({
					portrait: data.portrait.principal,
					portrait2: data.portrait.galeria,
					portrait3: data.portrait.secundario,
					portrait4: data.portrait.principal2,
					portrait5: data.portrait.galeria2,
					portrait8: data.portrait.videos.shift(),
					portrait6: data.portrait.videos,
					portrait7: data.portrait.tercearia,
					isLoading: false
				})
			})
	}
	componentDidMount() {
		this.setState({ isLoading: true })
		this.fetchData()
	}
	handleClick(e, p, t) {
		e.preventDefault()
		this.setState(prevState => ({
			isToggleOn: false,
			title: t,
			url: p
		}))

	}	
	render() {
		
		return (
			<div id="SectionIzq">
				<div id="portada">
					<div className="titulo-portada text-francker mb-2">
						<h4 className="d-inline-flex pr-2 pl-2 m-0  text-size16">{this.state.portrait.copete}</h4>
					</div>
					<div className="card">
						<img className="img-fluid" src={this.state.portrait.img} alt={this.state.portrait.titulo} />
						<div className="card-body text-left carousel-caption pt-0 pb-0">
							<h4 className="card-title text-size20 text-warning text-franckerSemibold">{this.state.portrait.atitulo}</h4>
							<div className="card-description text-size40 text-franckerHeavy">
								<Link to={`/noticia/${this.state.portrait.id}/${friendlyUrl(this.state.portrait.titulo)}.html`} className="text-white">
									<span>{this.state.portrait.titulo}</span>
								</Link>
							</div>
						</div>
					</div>
					<div className="pie-portada mb-1 mt-1 pt-1">
						<div className="text-franckerSemibold text-size18">
							<RawHtml.p>{this.state.portrait.resumen}</RawHtml.p>
						</div>
					</div>
				</div>
				<div id="card-small-portada">
					<div className="row mt-5">
						{
							this.state.isLoading === true ? <h5>Cargando...</h5> :
								this.state.portrait2.map(portrait => (
									<div className="col-md-6" key={portrait.id}>
										<div className="card">
											<div className="container">
												<div className="row">
													<div className="col-md-6 p-0 cardcontainer">
														<img src={portrait.img} className="img-fluid" alt={portrait.titulo} />
													</div>
													<div className="col-md-6 p-0 bg-warning">
														<div className="card-body">
															<Link to={`/noticia/${portrait.id}/${friendlyUrl(portrait.titulo)}.html`} className="text-black">
																<div className="bg-gradient-wipe"></div>
																<h3 className="text-franckerSemibold text-size20 mb-0 text-truncate">{portrait.titulo}</h3>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								))
						}
					</div>
				</div>
				<br />
				<div className="mt-2 mb-4 titulo-portada"><br /></div>
				<div id="card-large-portada">
					<div className="card">
						<div className="container">
							<div className="row barra-lineas-botton-black pb-2">
								<div className="col-md-5 p-0 ">
									<img src={this.state.portrait3.img} className="img-fluid" alt={this.state.portrait3.titulo} />
								</div>
								<div className="col-md-7 bg-danger">
									<div className="card-body text-white pb-1">
										<h6 className="card-subtitle mb-2">{this.state.portrait3.categoria}</h6>
										<Link to={`/noticia/${this.state.portrait3.id}/${friendlyUrl(this.state.portrait3.titulo)}.html`} className="text-white">
											<h5 className="card-title mb-3 text-franckerSemibold text-size20">{this.state.portrait3.titulo}</h5>
										</Link>
										<div className="card-text text-capitalize text-left"><RawHtml.div>{this.state.portrait3.resumen}</RawHtml.div></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div><br />
				<div id="portada">
					<div className="titulo-portada mb-2">
						<h4 className="d-inline-flex pr-2 pl-2 m-0 text-size18">{this.state.portrait4.categoria}</h4>
					</div>
					<div className="card">
						<img className="img-fluid" src={this.state.portrait4.img} alt={this.state.portrait4.titulo} />
						<div className="card-body text-left carousel-caption pt-0 pb-0">
							<h4 className="card-title text-size20 text-warning text-franckerSemibold">{this.state.portrait4.atitulo}</h4>
							<div className="card-description text-size40 text-franckerHeavy">
								<Link to={`/noticia/${this.state.portrait4.id}/${friendlyUrl(this.state.portrait4.titulo)}.html`} className="text-white">
									<span>{this.state.portrait4.titulo}</span>
								</Link>
							</div>
						</div>
					</div>
					<div className="pie-portada mb-1 mt-1 pt-1">
						<div className="text-francker text-size20"><RawHtml.p>{this.state.portrait4.resumen}</RawHtml.p></div>
					</div>
				</div>
				<div id="card-small-portada">
					<div className="row mt-5">
						{
							this.state.portrait5.map(portrait => (
								<div className="col-md-6" key={portrait.id}>
									<div className="card">
										<div className="container">
											<div className="row">
												<div className="col-md-6 p-0 cardcontainer">
													<img src={portrait.img} className="img-fluid" alt={portrait.titulo} />
												</div>
												<div className="col-md-6 p-0 bg-warning">
													<div className="card-body">
														<Link to={`/noticia/${portrait.id}/${friendlyUrl(portrait.titulo)}.html`} className="text-black">
															<div className="bg-gradient-wipe"></div>
															<h3 className="text-franckerSemibold text-size20 mb-0 text-truncate">{portrait.titulo}</h3>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							))
						}
					</div>
				</div>
				<br />
				<div className="mt-2 mb-4 titulo-portada"><br /></div>
				<div id="card-videos-portada">
					<div className="video-player">
						<div className="vp-titre">VIDEOS</div>
						<div className="vp-content">
							<div className="vp-video">
								<div className="card-default">
									{(this.state.isToggleOn)
										?
										<VideosYoutube video={this.state.portrait8.video2} autoplay="0" rel="0" modest="1" title={this.state.portrait8.titulo} />
										:
										<VideosYoutube video={this.state.url} autoplay="0" rel="0" modest="1" title={this.state.title} />
									}
									<div className="card-img-overlay">
										<h5 className="card-title text-franckerGothic text-size18 mb-0">
											{
												(this.state.isToggleOn)
													?
													this.state.portrait8.titulo
													:
													this.state.title
											}</h5>
									</div>
								</div>
							</div>
							<div className="vp-thumbs">
								{
									this.state.portrait6.map(portrait => (
										<a href="" className="text-black" key={portrait.id} onClick={(e, p, t) => this.handleClick(e, portrait.video2, portrait.titulo)}>
											<div className="img-container">
												<img src={portrait.video} className="img-fluid" alt={portrait.titulo} />
												<div className="overlay">
													<span className="text-franckerGothic text-size16">{portrait.titulo}</span>
												</div>
											</div>
										</a>
									))
								}
							</div>
						</div>
					</div>
				</div>
				<div id="noticias-columna">
					{
						this.state.isLoading === true ? <h5>Cargando...</h5> :
						this.state.portrait7.map(portrait => (
							<div className="card mb-3" key={portrait.id}>
								<div className="container">
									<div className="row barra-lineas-botton-black pb-2">
										<div className="col-md-6 p-0 ">
											<img src={portrait.img} className="img-fluid" alt={portrait.titulo} />
										</div>
										<div className="col-md-6 bg-warning2">
											<div className="card-body">
												<h6 className="card-subtitle mb-3 text-franckerGothic text-size14 text-white">{portrait.categoria}</h6>
												<Link to={`/noticia/${portrait.id}/${friendlyUrl(portrait.titulo)}.html`} className="text-white">
													<p className="card-text text-franckerSemibold text-size30">{portrait.titulo}</p>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}

export default Home;