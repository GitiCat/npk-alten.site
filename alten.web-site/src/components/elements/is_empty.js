import React from "react";
import PropTypes from "prop-types";
import RateReviewIcon from '@material-ui/icons/RateReview';

export default function IsEmpty() {
  return (
    <div className="empty-container container d-flex flex-dir--row">
      <RateReviewIcon className="empty-container--icon"/>
      <div className="empty-container--text container__title container--light-bg">
        <h2>Пустая страница...</h2>
        <p>Информация по данной странице находится в модерации.</p>
        <p>Вы можете получить необходимую информацию по контактному телефону: <a href="tel:84999951789">+7 (499) 995-17-89</a>,<br/>
				или же написав нам на электронную почту: <a href="mailto:info@npk-alten.ru">info@npk-alten.ru</a>.</p>
        <p>Приносим извинения за доставленные неудобства!</p>
      </div>
    </div>
  );
}