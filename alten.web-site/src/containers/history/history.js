import React from "react"; 
import GET from "../../utils/axios_get";
import Header from "../../components/blocks/header/index";

class History extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async componentDidMount() {
		
    var url = '/api/v0/articles/';
    var response = await GET(url);

    if(response.lenght !== 0) {
      this.setState({
        data: response,
        isLoading: false
      });
    }
  }

  render() {

    const { data, isLoading } = this.state;
		
    return (
      <div className="d-flex flex-dir--col">
        <Header title="История" subtitle="История предприятия"/>
        {!isLoading && 
					<React.Fragment>
					  {data["isError"] ? 
					    <div className="error-message">
						        <p>
						          {data["error"].message}
						        </p>
						      </div>
						      :
						   	<div className="container article-text-container container-descriptor container--light-bg d-flex flex-dir--col" dangerouslySetInnerHTML={{ __html: data["data"]["history"][0]["text"] }}></div>
					  }
					</React.Fragment>
        }
      </div>
    );
  }
}

export default History;