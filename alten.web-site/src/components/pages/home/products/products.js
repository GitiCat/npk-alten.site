import React from "react"
import PropTypes from "prop-types"

export default function ProductItem({name, title, descriptor, image}) {
	return (
		<div className="product-resize">
			<div className="product-container mdc-s-1 mdc-article--container mdc-block d-flex flex-dir--col col-vp-end col-hp-start">
				<div className="product-image" style={{backgroundImage: 'url(' + image + ')'}}></div>
				<div className="content container__litle-title container--light-bg">
					<div className="d-flex flex-dir--col">
						<div className="title d-flex flex-dir--row space-between row-vp-center">
							<h2>{title}</h2>
							<a href={"/products/" + name + "/0"} className="mdc-link--outlined hover-light--blue">Показать</a>
						</div>
						<div className="descriptor" dangerouslySetInnerHTML={{__html: descriptor}}/>
					</div>
				</div>
			</div>
		</div>
	)
}

ProductItem.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	descriptor: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
}