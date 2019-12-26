import React from "react" 
import PropTypes from 'prop-types'

export default function LeaderItem({title, subtitle, text, image, url_id}) {
	return (
		<div className="leader-container d-flex flex-dir--row">
			<div className="d-flex flex-dir--col">
				<div className="leader-image" style={{backgroundImage: 'url(' + image + ')'}}></div>
				<a className="mdc-link--outlined hover-light--blue" href={`${window.location.href}/${url_id}`}>Подробнее</a>
			</div>
			<div className="leader-content d-flex flex-dir--col">
				<div className="container__title container--light-bg">
					<h2>{title}</h2>
					<p>{subtitle}</p>
				</div>
				<hr className="bg--light-blue"/>
				<div className="container-descriptor container--light-bg" dangerouslySetInnerHTML={{__html: text}}></div>
			</div>
		</div>
	)
}

LeaderItem.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	url_id: PropTypes.number.isRequired
};