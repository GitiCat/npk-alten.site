import React from "react"
import PropTypes from "prop-types"

export default function SelectedNewsItem({title, category, descriptor, bg_image, date, original_url}) {
	return (
		<div className="d-flex flex-dir--col">
			<div className="image-container-w-100" style={{marginBottom: "42px"}}>
				<div className="image-base image-size--cover" style={{backgroundImage: "url(" + bg_image + ")"}}></div>
			</div>
			<div className="selected-content">
				<div className="content--about">
					<div className="container__litle-title container--light-bg d-flex flex-dir--row row-vp-center">
						<p style={{paddingRight: "6px"}}>{date}</p>
						<p>{category}</p>
					</div>
				</div>
				<div className="content--title" style={{marginBottom: "22px"}}>
					<div className="container__litle-title container--light-bg">
						<h2>{title}</h2>
					</div>
				</div>
				<div className="content--text">
					<div className="container-descriptor container--light-bg" dangerouslySetInnerHTML={{__html: descriptor}}></div>
				</div>
				<div className="content--urls d-flex">
					<a href={original_url} className="mdc-link--contained bg--middle-red hover-dark--red">Оригинальная статья</a>
					<a href="/news" className="mdc-link--contained bg--light-blue hover-dark--blue" style={{marginLeft: "42px"}}>Вернуться</a>
				</div>
			</div>
		</div>
	)
}


SelectedNewsItem.propTypes = {
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	descriptor: PropTypes.string.isRequired,
	bg_image: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	original_url: PropTypes.string.isRequired
}