import React from "react"
import PropTypes from "prop-types"

export default function SelectedProductList({data = [], category, onIndexChange}) {
	return (
		<div className="s-c-product__list d-flex flex-dir--col">
			{
				data["data"][category].map((element, index) => {
					return (
						<div key={index.toString()} className="s-p-product-item--container mdc-s-1">
							<input type="radio" name="s-c-product-input" id={`s-c-product-element__id-${index.toString()}`} data-item-id={index.toString()} onChange={onIndexChange}/>
							<label htmlFor={`s-c-product-element__id-${index.toString()}`}>
								<div className="s-c-list--image abs-fscreen" style={{backgroundImage: "url(" + element.bg_image + ")"}}></div>
								<div className="s-c-list--content abs-fscreen d-flex flex-dir--row row-vp-end row-hp-start">
									<div className="container__litle-title container--dark-bg">
										<h2>{element.title}</h2>
									</div>
								</div>
							</label>
						</div>
					)
				})
			}
		</div>
	)
}

SelectedProductList.propTypes = {
	data: PropTypes.any.isRequired,
	category: PropTypes.string.isRequired,
}