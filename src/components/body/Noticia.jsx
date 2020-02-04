import React, { Component } from 'react'
import RawHtml from 'react-raw-html'
import {Tweet} from 'react-twitter-widgets'
import InstagramEmbed  from 'react-instagram-embed'
import friendlyUrl from 'friendly-url'
import { Link } from 'react-router-dom'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import { config } from '../../config'
class Noticia extends Component {
	constructor(...props) {
		super(...props)		
		this.state = {
			portrait7: [],
			photos: [],
			item: '',
			currentImage: 0,
			isLoading: false
		}
		this.closeLightbox = this.closeLightbox.bind(this)
		this.openLightbox = this.openLightbox.bind(this)
		this.gotoNext = this.gotoNext.bind(this)
		this.gotoPrevious = this.gotoPrevious.bind(this)
	}	
	componentDidMount() {
		this.setState({ isLoading: true })
		fetch(config.path + 'data.php?id=' + this.props.match.params.id)
			.then((resp) => resp.json())
			.then(data => {
				this.setState({
					portrait7: data.portrait.tercearia,
					photos: data.portrait.galeria,
					item: data.portrait.individual,
					isLoading: false
				})

			})	
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.match.params.id !== this.props.match.params.id) {
			fetch(config.path + 'data.php?id=' + nextProps.match.params.id)
			.then((resp) => resp.json())
			.then(data => {
				this.setState({
					portrait7: data.portrait.tercearia,
					photos: data.portrait.galeria,
					item: data.portrait.individual,
					isLoading: false
				})
			})						
		}	
	}
	openLightbox(event, obj) {
		this.setState({
			currentImage: obj.index,
			lightboxIsOpen: true,
		});
	}
	closeLightbox() {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious() {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext() {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}	
	render() {		
		return (
			<div id="SectionIzq">
				<div id="item" className="container">
					<div className="row">
						<div className="col-md-12 p-0 mb-4">
							<div className="titulo-portada text-francker mb-2">
								<h4 className="d-inline-flex pr-2 pl-2 m-0  text-size16">{this.state.item.copete}</h4>
							</div>
							<div className="card-default p-0" id="noticia_individual">
								<img src={this.state.item.img} className="img-fluid card-img-top" alt={this.state.item.titulo} />
								<div className="card-img-overlay d-flex flex-column justify-content-end mb-4 p-0">
									<h4 className="card-title text-size16 text-warning text-franckerSemibold mb-0 pl-1">{this.state.item.atitulo}</h4>
									<h1 className="card-title text-franckerHeavy text-white pl-2 m-0">{this.state.item.titulo}</h1>
								</div>
								<div className="card-footer bg-transparent p-0">
									<span className="text-size12 text-franckerBold"><Link to={`/categoria/${this.state.item.idc}/${friendlyUrl(this.state.item.nombre)}.html`} className="text-warning2">{this.state.item.nombre}</Link>&nbsp;&nbsp;&nbsp;</span>
									<span className="text-size10 text-franckerGothic text-size12">{this.state.item.fecha_registro}</span>
									<span className="text-size10 text-franckerLight text-secondary">&nbsp;(&nbsp;actualizada a las {this.state.item.atupdate}&nbsp;)</span>
									<span className="pull-right text-franckerGothic text-size14">© {this.state.item.fuente}</span>{(this.state.item.desc_foto) ? <span className="pull-right text-franckerGothic text-size14">Foto:{this.state.item.desc_foto}&nbsp;&nbsp;&nbsp;</span> : ''}
								</div>
							</div>
						</div>
					</div>					
					<div className="row">
						<div className="text-justify" id="resumen">
							<RawHtml.div>{this.state.item.resumen}</RawHtml.div>
						</div>
						<div className="text-justify" id="descripcion">							
							<RawHtml.div>{this.state.item.descripcion}</RawHtml.div>							
						</div>
						<InstagramEmbed url='https://instagr.am/p/Zw9o4/' hidden={true}	/>					
						<div className="d-none">
							<Tweet tweetId="1032413695106801664" /></div>
					</div>					
				</div>
				<div className="mt-2 mb-4 titulo-portada">
					<br />
					<br />
					<br />
				</div>
				<div id="galeria">
					<Gallery photos={this.state.photos} onClick={this.openLightbox} />
					<Lightbox images={this.state.photos}
						onClose={this.closeLightbox}
						onClickPrev={this.gotoPrevious}
						onClickNext={this.gotoNext}
						currentImage={this.state.currentImage}
						isOpen={this.state.lightboxIsOpen}
					/>
				</div>
				<br />
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

export default Noticia;