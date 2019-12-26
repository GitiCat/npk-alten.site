import React from "react";
import GET from "../../utils/axios_get";
import Header from "../../components/blocks/header/index";
import LitleListItem from "../../components/pages/news/litle-list-item/index";
import ListItem from "../../components/pages/news/list-item/index";

class News extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    var api_url = "/api/v0/news/";
    var responce = await GET(api_url);

    if(responce.lenght !== 0) {
      this.setState({
        data: responce,
        isLoading: false
      });
    }
  }

  render() {

    const { data, isLoading } = this.state;

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
						      <div className="news-list d-flex flex-dir--col">
						        {
						          data["data"].map((element, index) => {
						            return (
						              <ListItem key={index.toString()}
						                id={element.id}
						                title={element.title}
														 category={element.category}
						                descriptor={element.descriptor}
						                bg_image={element.bd_image}
						                original_url={element.original_url}
						                date={element.date}/>
						            );
						          })
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
						            );
						          })
						        }
						      </div>
						    </React.Fragment>
						  }
						</React.Fragment>
          }
        </div>
      </div>
    );
  }
}

export default News;