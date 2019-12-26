import React from "react"
import PropTypes from "prop-types"

export default function ListItem({id, title, category, descriptor, bg_image, original_url, date}) {
	return (
		<div className="news-list-item d-flex flex-dir--row">
			<div className="news-list-item--image image-base image-size--cover" style={{backgroundImage: "url(" + bg_image + ")"}}></div>
			<div className="news-list-item--content d-flex flex-dir--col">
				<div className="content--title">
					<div className="container__litle-title container--light-bg">
						<h2>{title}</h2>
					</div>
					<div className="container__litle-title container--light-bg d-flex flex-dir--row">
						<p>{date}</p>
						<p>{category}</p>
					</div>
				</div>
				<div className="content--text container-descriptor container--light-bg" dangerouslySetInnerHTML={{__html: descriptor}}></div>
				<div className="content--links d-flex flex-dir--row row-vp-center row-hp-start">
					<a href={"/news/" + id} className="mdc-link--outlined bg--light-blue hover-dark--blue">Показать</a>
					<a href={original_url} className="mdc-link--outlined bg--middle-red hover-dark--red">Оригинальная статья</a>
				</div>
			</div>
		</div>
	)
}

ListItem.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	descriptor: PropTypes.string.isRequired,
	bg_image: PropTypes.string.isRequired,
	original_url: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired
}