import React from "react"
import PropTypes from "prop-types"

export default function LitleListItem({id, name, date}) {
	return (
		<a href={"/news/" + id} className="litle-list-item bg--light-blue mdc-s-2 hover-dark--blue">
			<div className="container__litle-title container--dark-bg">
				<h2 className="text-line-clamp">{name}</h2>
				<p>{date}</p>
			</div>
		</a>
	)
}

LitleListItem.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired
}