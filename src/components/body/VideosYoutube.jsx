import React from 'react'

const VideosYoutube = (props) => {
	
	var videoSrc = "https://www.youtube.com/embed/" +
		props.video + "?autoplay=" +
		props.autoplay + "&rel=" +
		props.rel + "&modestbranding=" +
		props.modest;
	return (
		<div className="container2">
			<iframe className="player" type="text/html" width="100%" height="100%" frameBorder="0"
				src={videoSrc}
				title={props.title} />
		</div>
	)
}

export default VideosYoutube