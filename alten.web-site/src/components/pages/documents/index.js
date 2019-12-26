import React from "react"
import PropTypes from "prop-types"
import GetAppIcon from '@material-ui/icons/GetApp';

export default function DocumentItem({title, name, descriptor, index, category, onClickDownload}) {
	return (
		<div className="doc-item-container">
			<div className="doc-item-title d-flex flex-dir--col">
				<div className="container__litle-title container--light-bg">
					<h2>{title}</h2>
					<p>{category}</p>
				</div>
			</div>
			<hr className="bg--light-blue"/>
			<div className="doc-item-text container-descriptor container--light-bg" dangerouslySetInnerHTML={{__html: descriptor}}></div>
			<button className="download-file d-flex flex-dir--row row-hp-start row-vp-center" data-i={index} onClick={onClickDownload}>
				<div className="d-icon md-36"><GetAppIcon/></div>
				<span>{name}</span>
			</button>
		</div>
	)
}