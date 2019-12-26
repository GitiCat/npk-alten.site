import React from "react";
import GET from "../../utils/axios_get";
import Header from "../../components/blocks/header/index";
import LeaderItem from "../../components/pages/leaderships/index";

class Leadership extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    var api_url = '/api/v0/articles/';
    var response = await GET(api_url);

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
        <Header title="Руководство" subtitle="Руководство предприятия"/>
        {!isLoading &&
					<React.Fragment>
					  {data["isError"] ?
					    <div className="error-message">
					      <p>{data["error"].message}</p>
					    </div>
					    :
					    <div className="container d-flex flex-dir--col col-vp-start col-hp-start">
					      {
					        data["data"]["leadership"].map((element, index) => {
					          return element["is_article_enable"] && 
											<LeaderItem key={index.toString()}
											  title={element.title}
											  subtitle={element.subtitle}
											  text={element.text}
											  image={element.m_image}
											  url_id={element.id}/>;
										
					        })
					      }
					    </div>
					  }
					</React.Fragment>
        }
      </div>
    );
  }
}

export default Leadership;