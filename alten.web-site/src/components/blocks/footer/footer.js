import React from "react"

export default function Footer() {
	return (
		<footer className="footer mdc-s-2" id="footer">
			<div className="container d-flex flex-dir--row row-vp-start row-hp-center">
				<div className="footer-item--container d-flex flex-dir--col col-vp-start col-hp-start">
					<div className="company">
						<h3>АО НПК АЛЬТЭН</h3>
						<span>Акционерное общество «Научно-производственный комплекс «Альтэрнативная энергетика»</span>
					</div>
				</div>
				<div className="footer-item--container d-flex flex-dir--col col-vp-start col-hp-start">
					<span>Предприятие</span>
					<hr className="bg--light-blue"/>
					<a href="/company/leadership">Руководство</a>
					<a href="/company/publications">Публикации</a>
					<a href="/company/licences">Лицензии</a>
					<a href="/company/gallery">Галерея</a>
				</div>
				<div className="footer-item--container d-flex flex-dir--col col-vp-start col-hp-start">
					<span>Карта сайта</span>
					<hr className="bg--light-blue"/>
					<a href="/">Главная</a>
					<a href="/history">История</a>
					<a href="/activity">Деятельность</a>
					<a href="/products">Продукция</a>
					<a href="/documents">Документы</a>
					<a href="/news">Новости</a>
				</div>
				<div className="footer-item--container d-flex flex-dir--col col-vp-start col-hp-start">
					<span>Контакты</span>
					<hr className="bg--light-blue"/>
					<div>Телефон: <a href="tel:84999951789">+7 (499) 995-17-89</a></div>
					<div>Факс / телефон: <a href="tel:84992406412">+7 (499) 240-64-12</a></div>
					<div>Адрес: <a href="https://yandex.ru/maps/21642/elektrougli/?z=17&ll=38.206184%2C55.724726&l=map&origin=jsapi_2_1_68&from=api-maps&mode=whatshere&whatshere%5Bpoint%5D=38.204875%2C55.723554&whatshere%5Bzoom%5D=17">142455 Московская область, Центральная улица, 59</a></div>
					<a href="mailto:info@npk-alten.ru">info@npk-alten.ru</a>
					<a href="https://npk-alten.ru">npk-alten.ru - официальный сайт АО НПК АЛЬТЭН</a>
				</div>
			</div>
			<div className="copyright-container d-flex flex-dir--row row-hp-center row-vp-center">
				<div>Copyright &copy; <span id="copyright__text"></span> Все права защищены.</div>
			</div>
		</footer>
	)
}