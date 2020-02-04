import React, { Component } from 'react'
import logo2 from '../../assets/img/logo2.png'
class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<footer id="pie">
					<div id="footer">
						<div className="container line-border-bottom">
							<div className="row pt-4 pb-5">
								<div className="col-md-3 line-border-left">
									<img src={logo2} alt="Logo" />
								</div>
								<div className="col-md-9">
									<div className="text-left text-white">
										<p className="text-franckerSemibold text-size18">La Afición es un medio afiliado al Circulo de Periodistas Deportivos de Oruro (CPDO) y el Sindicato de Trabajadores de la	Prensa de Oruro (STPO).</p>
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row pt-4">
								<div className="col-md-4">
									<div className="card bg-transparent text-white border-0">
										<div className="card-body pt-0">
											<h4 className="card-title text-franckerSemibold text-size18">Contacto</h4>
											<p className="card-description pl-2 text-size18 text-bold">
												<span><i className="fa fa-street-view"></i> Calle Av. Alberto Alcocer</span><br />
												<span><i className="fa fa-envelope"></i> info@aficionoruro.com</span><br />
												<span> Lunes - Viernes </span><br />
											</p>
										</div>
									</div>
								</div>
								<div className="col-md-8">
									<div className="card bg-transparent text-white border-0">
										<div className="card-body pt-0">
											<h4 className="card-title text-franckerSemibold text-size18">Redes Sociales</h4>
											<p className="card-description pl-2 text-size18 text-bold">
												<span><i className="fa fa-facebook-f"></i>&nbsp;&nbsp;www.facebook.com/laaficion</span><br />
												<span><i className="fa fa-twitter"></i> www.twitter.com/laaficion</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<div className="container">
							<div className="row">
								<div className="col-sm-6 ">
									<div className="copyright-text">
										<p>Copyright © 2018 NE2ADH Rights Reserved</p>
									</div>
								</div>
								<div className="col-sm-6">
									<ul className="social-link pull-right">
										<li>
											<a href="">
												<i className="fa fa-facebook" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="">
												<i className="fa fa-twitter" aria-hidden="true"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;