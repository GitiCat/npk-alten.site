import React from "react";
import NewsItem from "../../components/pages/home/news/news";
import GET from "../../utils/axios_get";

class News extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async componentDidMount() {
		
    var url = "/api/v0/news/";
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
      <div className="container d-flex flex-dir--col col-vp-start col-hp-start">
        <div className="container__title container--light-bg">
          <h2>Новости</h2>
          <p>Последние новости и события предприятия</p>
        </div>
        {!isLoading && 
					<React.Fragment>
					  <div className="news-container">
					    <div className="d-flex flex-dir--row row-vp-start row-hp-start">
  					    {data["isError"] ? 
  					      <div className="error-message">
  					        <p>
  					          {data["error"].message}
  					        </p>
  					      </div>
  								 : 
  					      data["data"].slice(0, 2).map((element, index) => {
  					        return (
  					          <NewsItem key={index.toString()}
					              id={element.id}
  					            title={element.title}
  					            category={element.category}
  					            descriptor={element.descriptor}
  					            bg_image={element.bd_image}
  					            url={element.url}
  					            original_url={element.original_url}
  					            date={element.date}/>
  					        );
  					      })
  								

  					    }
					    </div>
					  </div>
					</React.Fragment>
        }
      </div>
    );
  }
}

export default News;