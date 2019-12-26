import React from "react"
import PropTypes from "prop-types"

export default function SelectedLeaderItem({title, subtitle, text, image}) {
	return (
		<div className="container d-flex flex-dir--row">
			<div className="sli-image" style={{backgroundImage: 'url(' + image + ')'}}></div>
			<div className="sli-content d-flex flex-dir--col">
				<div className="container__title container--light-bg">
					<h2>{title}</h2>
					<p>{subtitle}</p>
				</div>
				<hr className="bg--light-blue"/>
				<div className="container-descriptor container--light-bg d-flex flex-dir--col" dangerouslySetInnerHTML={{__html: text}}></div>
			</div>
		</div>
	)
}

SelectedLeaderItem.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
};