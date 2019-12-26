import React from "react"
import GET from "../../../utils/axios_get"
import Header from "../../../components/blocks/header/index"
import LitleListItem from "../../../components/pages/news/litle-list-item/index"
import SelectedItem from "../../../components/pages/news/selected/index"

class NewsSelected extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			data: [],
			selected: [],
			isLoading: true
		}
	}

	async componentDidMount() {
		const { id } = this.props.match.params
		var api_url = `/api/v0/news/`
		var selected_url = `/api/v0/news/${id}/`

		var responce = await GET(api_url)
		var responceSelectedItem = await GET(selected_url)

		if(responce.lenght !== 0) {
			this.setState({
				data: responce,
				selected: responceSelectedItem,
				isLoading: false
			})
		}
	}

	render() {

		const { data, selected, isLoading } = this.state
		
		return (
			<div className="news-container d-flex flex-dir--col">
				<Header title="Новости" subtitle="Новостная лента предприятия"/>
				<div className="news-content container d-flex flex-dir--row">
					{!isLoading &&
						<React.Fragment>
							{data["isError"] ? 
								<div className="error-message">
									<p>{data["error"].message}</p>
								</div>
								:
								<React.Fragment>
									<div className="selected-news d-flex flex-dir--col">
										{
											<SelectedItem title={selected.data.title}
												category={selected.data.category}
												descriptor={selected.data.descriptor}
												bg_image={selected.data.bd_image}
												date={selected.data.date}
												original_url={selected.data.original_url}s/>
										}
									</div>
									<div className="news-litle-list d-flex flex-dir--col flex-col-30">
										{
											data["data"].map((element, index) => {
												return (
													<LitleListItem key={index.toString()}
														id={element.id} 
														name={element.title}
														date={element.date}/>
												)
											})
										}
									</div>
								</React.Fragment>
							}
						</React.Fragment>
					}
				</div>
			</div>
		)
	}
}

export default NewsSelected;