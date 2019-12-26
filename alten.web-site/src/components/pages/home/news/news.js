import React from "react"
import PropTypes from "prop-types"

export default function NewsItem({id, title, category, descriptor, bg_image, original_url, date}) {
	return (
		<div className="flex-col-30">
			<div className="new-container mdc-s-1 mdc-article--container mdc-block d-flex flex-dir--col col-vp-end col-hp-start">
				<div className="news-image" style={{backgroundImage: "url(" + bg_image + ")"}}></div>
				<div className="content">
					<div className="title d-flex flex-dir--row row-hp-start row-vp-start">
						<div className="container__litle-title container--light-bg">
							<h2>{title}</h2>
							<p>{category}</p>
						</div>
					</div>
					<hr/>
					<div className="container-descriptor container--light-bg" dangerouslySetInnerHTML={{__html: descriptor}}></div>
				</div>
				<div className="news-links d-flex flex-dir--row row-vp-center row-hp-start">
					<a href={"/news/" + id} className="mdc-link--outlined hover-light--blue">Читать</a>
					{original_url !== null && 
						<a href={original_url} className="mdc-link--outlined hover-light--blue">Оригинал</a>
					}
				</div>
			</div>
		</div>
	)
}

NewsItem.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	descriptor: PropTypes.string.isRequired,
	bg_image: PropTypes.string.isRequired,
	original_url: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired
}