import React from 'react'
import ItemNewsList from './ItemNewsList'
const LastNewsList = (props) => (
			<ul className="list-group list-group-flush mt-2">
				{
					props.news.map((item) => (						
						<ItemNewsList
							key={item.id}
							id={item.id}
							fecha={item.fecha}
							titulo={item.titulo}
						/>
					))
				}
			</ul>
)


export default LastNewsList;
