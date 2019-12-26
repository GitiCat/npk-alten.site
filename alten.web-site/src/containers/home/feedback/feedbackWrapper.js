import React from "react"
import { initValues, validateFields } from "./initValues"

export default function Wrapper(WrapperComponent) {
	return class Wrapper extends React.Component {

		state = {
			isFetching: false,
			data: initValues,
			errors: validateFields
		};
	
		handleInput = e => {
			const { name, value } = e.currentTarget
			this.setState(({data, errors}) => ({
				data: {
					...data,
					[name]: value
				},
				errors: {
					...errors,
					[name]: false
				}
			}));
		};

		handleSubmit = e => {
			e.preventDefault()
			
			const { data, errors } = this.state;
			
			const isValidate = Object.keys(errors).reduce(
				(sum, item) => sum && this.validateForm(item, data[item]),
				true
			);

			if(isValidate) {
				console.log('here we send data', data);
			} else {
				console.log('no valid data');
			}
		};

		handleBlur = e => {
			const { name, value } = e.currentTarget
			this.validateForm(name, value)
		}

		validateForm = (name, value) => {
			const isEmpty = this.isEmptyValue(name, value);

			switch(name) {
				case "senderName":
					if(isEmpty) 
						return false;
				return true;

				case "senderEmail":
					if(isEmpty)
						return false
					return true

				case "senderMessage":
					if(isEmpty)
						return false
					return true
				default:
					return isEmpty
			}  
		}

		isEmptyValue = (name, value) => {
			if(!value.trim()) {
				this.setState(({errors}) => ({
					errors: {
						...errors,
						[name]: `Поле не должно быть пустым`
					}
				}));
			}
		};

		render() {
			return (
				<WrapperComponent
					{...this.state}
					{...this.props}
					handleSubmit={this.handleSubmit}
					handleBlur={this.handleBlur}
					handleInput={this.handleInput}
				/>
			)
		}
	}
}