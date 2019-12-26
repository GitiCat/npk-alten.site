import React from "react";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import CallSplitOutlinedIcon from '@material-ui/icons/CallSplitOutlined';
import AvTimerOutlinedIcon from '@material-ui/icons/AvTimerOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

export default function Services() {
  return (
    <div className="services d-flex flex-dir--col bg--light-blue">
      <div className="container d-flex flex-dir--row">
        <div className="flex-col-50 d-flex flex-dir--row row-vp-center row-hp-center">
          <SupervisorAccountIcon className="mdc-icon mdc-icon--light md-144"/>
          <div>
            <div className="container__title container--dark-bg">
              <h2>Услуги</h2>
            </div>
            <div className="container-descriptor container--dark-bg">
              <p>
								Предприятие предоставляет все необходимые услуги нашим клиентам по выпускаемой продукции
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col-50 d-flex flex-dir--col col-hp-center col-vp-start">
          <ul>
            <li>
              <HelpOutlineOutlinedIcon className="mdc-icon mdc-icon--light md-36"/>
              <div className="container__litle-title container--dark-bg">
                <h2>Поддержка</h2>
                <p>Ответим на любые Ваши вопросы в короткие сроки</p>
              </div>
            </li>
            <li>
              <AssignmentOutlinedIcon className="mdc-icon mdc-icon--light md-36"/>
              <div className="container__litle-title container--dark-bg">
                <h2>Задача</h2>
                <p>Найдем решение для поставленной задачи</p>
              </div>
            </li>
            <li>
              <CallSplitOutlinedIcon className="mdc-icon mdc-icon--light md-36"/>
              <div className="container__litle-title container--dark-bg">
                <h2>Разработка</h2>
                <p>Разработаем источник по Вашему заказу</p>
              </div>
            </li>
            <li>
              <AvTimerOutlinedIcon className="mdc-icon mdc-icon--light md-36"/>
              <div className="container__litle-title container--dark-bg">
                <h2>Испытания</h2>
                <p>Полное испытание источника перед его выпуском</p>
              </div>
            </li>
            <li>
              <SettingsOutlinedIcon className="mdc-icon mdc-icon--light md-36"/>
              <div className="container__litle-title container--dark-bg">
                <h2>Техпомощь</h2>
                <p>Долгосрочное обслуживание выпущенной продукции</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}