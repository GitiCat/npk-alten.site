import React from "react"
import PropTypes from "prop-types"

export default function ProductItem({title, bg_image, category_name, category, item_id}) {
	return (
		<div className="p-item-container d-flex flex-dir--col col-vp-end mdc-article--container mdc-block mdc-s-1 flex-col-30">
			<div className="p-item-image" style={{backgroundImage: "url(" + bg_image + ")"}}></div>
			<div className="p-item-content d-flex flex-dir--col col-hp-center col-vp-start">
				<div className="container__litle-title container--light-bg">
					<div className="d-flex flex-dir--row space-between row-vp-center">
						<h2>{title}</h2>
						<a href={`/products/${category}/${item_id}`} className="mdc-link--outlined hover-light--blue">Показать</a>
					</div>
					<p>{category_name}</p>
				</div>
			</div>
		</div>
	)
}

ProductItem.propTypes = {
	title: PropTypes.string.isRequired,
	bg_image: PropTypes.string.isRequired,
	category_name: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	item_id: PropTypes.number.isRequired
}