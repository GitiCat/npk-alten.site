import React from 'react';

export default function About() {
  return(
    <div className="about d-flex flex-dir--col col-hp-start col-vp-stretch">
      <div className="container d-flex flex-dir--row">
        <div className="mdc-block pl0 mdc-s-1 d-flex flex-dir--col" style={{ minWidth: 40.4444 + '%' }}>
          <ul className="numeric-list">
            <li>
              <span>01</span>
              <span>Производство аккумуляторных батарей</span>
            </li>
            <li>
              <span>02</span>
              <span>Производство первичных источников тока</span>
            </li>
            <li>
              <span>03</span>
              <span>Поставка зарядно-разрядных устройств</span>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-dir--col" style={{ padding: '0 8.8888' + '%' }}>
          <div className="container__title container--light-bg">
            <h2>
							Кто мы?
            </h2>
            <p>
							Коротко о том, что вам нужно знать
            </p>
          </div>
          <div className="container-descriptor container--light-bg">
            <p>
							АО «НПК «АЛЬТЭН» - это современное, динамично развивающееся предприятие, располагающее высококвалифицированным
				            персоналом и мощной производственной базой, которые обеспечивают отличное качество и надежность при разработке и выпуске
				            химических источникой тока и устройств для их обслуживания и диагностики.
            </p>
          </div>
          <div className="d-flex flex-dir--row">
            <a href="/activity/" className="mdc-link--contained mdc-s-3 bg--light-blue hover-dark--blue" id="link--ripple">
              <span>Подробнее</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}