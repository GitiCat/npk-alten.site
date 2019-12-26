import React from "react"
import PropTypes from "prop-types"
import IsNotData from "../../../elements/is_not_data"

export default function SelectedProductDisplay({id, title, descriptor, specifications, bg_image, files, category_name}) {
	return (
		<div className="s-c-product__display d-flex flex-dir--col">
			<div className="scp-d__title">
				<div className="container__title container--light-bg">
					<h2>{title}</h2>
					<p>{category_name}</p>
				</div>
				<hr className="bg--light-blue"/>
			</div>
			<div className="spc-d__content d-flex flex-dir--row">
				<div className="spc-d__content-data d-flex flex-dir--col">
					<div className="spc-d__content-data-text article-text-container light-container" dangerouslySetInnerHTML={{__html: descriptor}}></div>
					<div className="spc-d__content-data-spec">
						<div className="container__litle-title container--light-bg">
							<h2>Характеристики</h2>
							<p>Технические параметры изделия</p>
						</div>
						<div dangerouslySetInnerHTML={{__html: specifications}}/>
					</div>
					<div className="spc-d__content-data-files">
						<div className="container__litle-title container--light-bg">
							<h2>Документы</h2>
							<p>Прилагаемые документы к изделию</p>
						</div>
						{files === null &&
							<IsNotData descriptor="Прилагаемые документы отсутствуют"/>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

SelectedProductDisplay.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	descriptor: PropTypes.string.isRequired,
	specifications: PropTypes.string.isRequired,
	bg_image: PropTypes.string.isRequired,
	category_name: PropTypes.string.isRequired
}