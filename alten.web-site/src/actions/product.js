import { CHANGE_SELECTED_PRODUCT } from "../constants/product"

export function changeSelectedProduct(index) {
	return {
		type: CHANGE_SELECTED_PRODUCT,
		payload: index
	}
}