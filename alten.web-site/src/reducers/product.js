import { CHANGE_SELECTED_PRODUCT } from "../constants/product"

const initialState = {
	index: 0
}

export default function product(state = initialState, action) {
	switch(action.type) {
		case CHANGE_SELECTED_PRODUCT:
			return {
				...state,
				index: action.payload
			}
		default:
			return state
	}
}