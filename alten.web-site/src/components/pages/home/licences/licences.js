import React from "react"

export default function Licences() {
	return (
		<div className="container licences-container bg--dark-blue d-flex flex-dir--row row-vp-start row-hp-start">
			<div className="bg-image-logo" style={{backgroundImage: "url(public/media/gerb_logo.png)"}}></div>
			<div style={{marginRight: "120px"}}>
				<div className="container__title container--dark-bg">
					<h2>Лицензии</h2>
					<p>
						Документы, подтверждающие нашу деятельность
					</p>
				</div>
				<div className="licences-content d-flex flex-dir--row row-hp-start row-vp-start">
					<div className="descriptor-container d-flex flex-dir--row row-vp-start row-hp-start">
						<div className="logos d-flex flex-dir--col col-vp-start col-hp-start">
							<div className="logo" style={{backgroundImage: "url(public/media/ross_logo.png)"}}></div>
							<div className="logo" style={{backgroundImage: "url(public/media/prom_torg_logo.png)"}}></div>
							<div className="logo" style={{backgroundImage: "url(public/media/fsb-logo.png)"}}></div>
						</div>
						<div className="text container-descriptor container--dark-bg">
							<p>
								Мы имеем все необходимые документы, лицензии и сертификаты от ФСБ, РОСКОСМОС, МИНПРОМТОРГ, разрешающие нашу деятельность.
							</p>
							<a href="/company/licences" className="mdc-link--contained bg--light-blue hover-dark--blue">
								<span>Перейти</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="slider-container">
					<div className="slide mdc-s-5" id="slide-1" style={{backgroundImage: "url(public/media/lic_1.png)"}}></div>
					<div className="slide mdc-s-5" id="slide-2" style={{backgroundImage: "url(public/media/lic_2.png)"}}></div>
					<div className="slide mdc-s-5" id="slide-3" style={{backgroundImage: "url(public/media/lic_3.png)"}}></div>
					<div className="slide mdc-s-5" id="slide-4" style={{backgroundImage: "url(public/media/lic_4.png)"}}></div>
				</div>
			</div>
		</div>
	)
}