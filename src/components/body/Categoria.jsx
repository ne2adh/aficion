import React, { Component } from 'react'
import RawHtml from "react-raw-html"
import friendlyUrl from 'friendly-url'
import Pagination from "react-js-pagination"
import { Link } from "react-router-dom"
import { config } from '../../config';
class Categoria extends Component {
	constructor(...props) {
		super(...props)

		this.state = {
			portrait: '',
			portrait5: [],
			portrait6: 0,
			activePage: 1,
			isLoading: false
		}		
		this.handlePageChange = this.handlePageChange.bind(this)
	}

	fetchData() {
		fetch(config.path + 'data.php?query=categoria&idc=' + this.props.match.params.idc + '&page=' + ((this.state.activePage - 1) * 10))
			.then((resp) => resp.json())
			.then(data => {
				this.setState({
					portrait: data.portrait.principal,
					portrait5: data.portrait.categoria,
					portrait6: data.portrait.categoria2,
					isLoading: false
				})
			})
	}

	componentDidMount() {
		this.setState({ isLoading: true })
		fetch(config.path + 'data.php?query=categoria&idc=' + this.props.match.params.idc + '&page=' + ((this.state.activePage - 1) * 10))
			.then((resp) => resp.json())
			.then(data => {
				this.setState({
					portrait: data.portrait.principal,
					portrait5: data.portrait.categoria,
					portrait6: data.portrait.categoria2,
					isLoading: false
				})
			})
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.match.params.idc !== this.props.match.params.idc) {
			fetch(config.path + 'data.php?query=categoria&idc=' + nextProps.match.params.idc + '&page=' + ((this.state.activePage - 1) * 10))
				.then((resp) => resp.json())
				.then(data => {
					this.setState({
						portrait: data.portrait.principal,
						portrait5: data.portrait.categoria,
						portrait6: data.portrait.categoria2,
						isLoading: false
					})
				})
		}
	}
	handlePageChange(pageNumber) {
		this.setState({ activePage: pageNumber })
		fetch(config.path + 'data.php?query=categoria&idc=' + this.props.match.params.idc + '&page=' + ((this.state.activePage - 1) * 10))
			.then((resp) => resp.json())
			.then(data => {
				this.setState({
					portrait: data.portrait.principal,
					portrait5: data.portrait.categoria,
					portrait6: data.portrait.categoria2,
					isLoading: false
				})
			})		
	}

	render() {
		return (
			<div id="SectionIzq">
				<div id="portadas">
					<div className="titulo-portada text-francker mb-2">
						<h4 className="d-inline-flex pr-2 pl-2 m-0  text-size16">{this.state.portrait.categoria}</h4>
					</div>
					<div className="card">
						<img className="img-fluid" src={this.state.portrait.img} alt={this.state.portrait.titulo} />
						<div className="card-body text-left carousel-caption pt-0 pb-0">
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
				<div className="mt-2 mb-4 titulo-portada1"><br /></div>
				<div id="card-small-portada">
					<div className="row mt-5">
						{
							this.state.isLoading === true ? <h5>Cargando...</h5> :

								this.state.portrait5.map(portrait => (
									<div className="col-md-6 mb-2" key={portrait.id}>
										<div className="container">
											<div className="row bg-gray-950 d-flex">
												<div className="col-md-6 p-0 img-overlay">
													<img src={portrait.img} className="img-fluid" alt={portrait.titulo} />
												</div>
												<div className="col-md-6 embed-responsive embed-responsive-16by9">
													<div className="embed-responsive-item p-3">
														<Link to={`/noticia/${portrait.id}/${friendlyUrl(portrait.titulo)}.html`} className="text-black">
															<div className="bg-gradient-wipe"></div>
															<h3 className="text-franckerSemibold text-size16 mb-0 ">{portrait.titulo}</h3>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								))
						}
						<div className="clearfix"></div>

					</div>
				</div><br />

				<div className="text-center">

					<Pagination
						hideNavigation
						itemClass={`page-item`}
						linkClass={`page-link`}
						innerClass={`pagination justify-content-center`}
						activePage={this.state.activePage}
						itemsCountPerPage={20}
						totalItemsCount={this.state.portrait6}
						pageRangeDisplayed={5}
						onChange={this.handlePageChange}
					/>
				</div>
			</div>
		)
	}
}

export default Categoria;