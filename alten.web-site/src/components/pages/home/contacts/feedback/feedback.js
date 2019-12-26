import React, { Component } from "react"
import FormWrapper from "../../../../../containers/home/feedback/feedbackWrapper"
import Input from "../../../../elements/input"
import TextArea from "../../../../elements/textarea"
import PropTypes from "prop-types"

import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';

@FormWrapper
class FeedbackForm extends Component {
	render() {

		const { data, errors, handleInput, handleSubmit, handleBlur } = this.props

		return (
			<div className="feedback-container flex-col-50">
				<div className="container__title container--light-bg">
					<h2>Остались вопросы?</h2>
					<p>Задайте их и мы быстро с Вами свяжемся!</p>
				</div>
				<form onSubmit={handleSubmit} action="" className="d-flex flex-dir--col col-vp-start col-hp-start">
					<Input
						name="senderName"
						label="Инициалы"
						icon={<PersonIcon className="fb-input-icon"/>}
						value={data.senderName}
						onChange={handleInput}
						onBlur={handleBlur}
						required
						error={errors.senderName}
					/>
					<Input 
						name="senderEmail"
						label="Электронная почта"
						icon={<MailIcon className="fb-input-icon"/>}
						value={data.senderEmail}
						onChange={handleInput}
						onBlur={handleBlur}
						required
						error={errors.senderEmail}
					/>
					<TextArea
						name="senderMessage"
						label="Вопрос"
						value={data.senderMessage}
						onChange={handleInput}
						onBlur={handleBlur}
						required
						error={errors.senderMessage}
					/>
					<button type="submit" className="mdc-link--contained hover-dark--blue bg--light-blue">
						<span>Отправить</span>
					</button>
				</form>
			</div>
		)
	}
}

export default FeedbackForm;