import React from "react"
import GET from "../../../utils/axios_get"
import Header from "../../../components/blocks/header/index"
import SelectedLeaderItem from "../../../components/pages/leaderships/selected/index"

class SelectedLeader extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isLoading: true
		}
	}

	async componentDidMount() {
		var selected_id = this.props.match.params.id;
		var api_url = `/api/v0/articles/${selected_id}/`
		var response = await GET(api_url);

		if(response.lenght != 0) {
			this.setState({
				data: response,
				isLoading: false
			})
		}
	}

	render() {

		const { data, isLoading } = this.state

		return (
			<div className="selected-leader-container d-flex flex-dir--col">
				<Header title="Руководство" subtitle="Руководство предприятия"/>
				{!isLoading && 
					<React.Fragment>
						{data["isError"] ? 
							<div className="error-message">
								<p>{data["error"].message}</p>
							</div>
							:
							<SelectedLeaderItem title={data["data"]["title"]}
								subtitle={data["data"]["subtitle"]}
								text={data["data"]["text"]}
								image={data["data"]["m_image"]}/>
						}
					</React.Fragment>
				}
			</div>
		)
	}
}

export default SelectedLeader;