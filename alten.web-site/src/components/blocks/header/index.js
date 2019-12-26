import React from "react"

export default function Header({title, subtitle}) {
	return (
		<div className="header-container container mdc-s-2">
			<div className="article__title container--light-bg d-flex flex-dir--col col-vp-start col-hp-start">
				<h1>{title}</h1>
				<hr className="bg--middle-red"/>
				<p>{subtitle}</p>
			</div>
		</div>
	)
}