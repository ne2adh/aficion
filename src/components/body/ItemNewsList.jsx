import React from 'react'
import { Link } from "react-router-dom"
import friendlyUrl from 'friendly-url'
const ItemNewsList =(props)=>(
	<li className="list-group-item">
		<Link to={`/noticia/${props.id}/${friendlyUrl(props.titulo)}.html`} className="text-black">			
			<div className="card-default">
				<div className="card-subtitle">
					<span className="text-size14">{props.fecha}</span>
				</div>
				<div className="card-description">
					<span className="text-size20 text-franckerHeavy">{props.titulo}</span>
				</div>
			</div>
		</Link>		
	</li>
)

export default ItemNewsList