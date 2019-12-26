import React from "react"
import PropTypes from "prop-types"

export default function LicenceItem({name, title, descriptor, image}) {
	return (
		<div className="licence-item--container d-flex flex-dir--row">
			<div className="licence-item--image image-container-size">
				<div className="image-base image-size--contain" style={{backgroundImage: "url(" + image + ")"}}></div>
			</div>
			<div className="licence-item--content">
				<div className="licence-item--content__title">
					<div className="container__title container--light-bg">
						<h2>{title}</h2>
					</div>
					<div className="container__litle-title container--light-bg">
						<p>{name}</p>
					</div>
					<hr className="bg--middle-blue content-line"/>
				</div>
				<div className="licence-item--content__text container-descriptor container--light-bg">
					<div dangerouslySetInnerHTML={{__html: descriptor}}></div>
				</div>
			</div>
		</div>
	);
}

LicenceItem.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	descriptor: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
}