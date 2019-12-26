import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as productAction from "../../../actions/product"
import GET from "../../../utils/axios_get"
import Header from "../../../components/blocks/header/index"
import List from "../../../components/pages/selected_product/list/index"
import Display from "../../../components/pages/selected_product/display/index"
import ContainerIsEmpty from "../../../components/elements/is_empty"

class SelectedProductCategory extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			data: [],
			isLoading: true
		}

		this.onIndexChange = this.onIndexChange.bind(this)
	}
	
	async componentDidMount() {
		var api_url = "/api/v0/products/"
		var response = await GET(api_url)
		
		if(response.lenght !== 0) {
			this.setState({
				data: response,
				isLoading: false
			})
		}

		document.getElementById(`s-c-product-element__id-${this.props.productReducer["index"]}`)
			.checked = true;

	}

	UNSAFE_componentWillMount() {
		const { id } = this.props.match.params
		this.props.productAction.changeSelectedProduct(id)
	}

	onIndexChange(event) {
		var id = event.target.dataset.itemId
		this.props.productAction.changeSelectedProduct(id)
	}
	
	render() {
	
		const { data, isLoading } = this.state
		const { category, id } = this.props.match.params
		const { productReducer } = this.props
	
		return (
			<div className="s-c-product d-flex flex-dir--col">
				<Header title="Продукция" subtitle="Продукция, выпускаемая предприятием"/>
				<div className="s-c-product__container d-flex flex-dir--col">
					{!isLoading &&
						<React.Fragment>
							{data["isError"] ? 
								<div className="error-message">
									<p>{data["error"].message}</p>
								</div>
								:
								<React.Fragment>
									{data["data"][category].length === 0 ? 
										<ContainerIsEmpty/>
										:
										<div className="container s-c-product__content d-flex flex-dir--row">
											<List data={data} category={category} onIndexChange={this.onIndexChange}/>
											<Display id={id} 
												title={data["data"][category][productReducer["index"]]["title"]}
												descriptor={data["data"][category][productReducer["index"]]["descriptor"]}
												specifications={data["data"][category][productReducer["index"]]["specifications"]}
												bg_image={data["data"][category][productReducer["index"]]["bg_image"]}
												files={data["data"][category][productReducer["index"]]["files"]}
												category_name={data["data"][category][productReducer["index"]]["category_name"]}/>
										</div>
									}
								</React.Fragment>
							}
						</React.Fragment>
					}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		productReducer: state.ProductReducer
	}
}

function mapDispatchToProps(dispatch) {
	return {
		productAction: bindActionCreators(productAction, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedProductCategory);