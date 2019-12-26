import React from "react";
import GET from "../../utils/axios_get";
import Header from "../../components/blocks/header/index";
import DocumentItems from "../../components/pages/documents/index";
import axios from "axios"

class Documents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };

    this.onClickDownload = this.onClickDownload.bind(this);
  }

  async componentDidMount() {
    var api_url = [
      '/api/v0/documents/',
      '/api/v0/documents-category/'
    ];

    var response = {
      documents: await GET(api_url[0]),
      category: await GET(api_url[1])
    };

    if(response["documents"].lenght !== 0 && response["category"].lenght !== 0) {
      this.setState({
        data: response,
        isLoading: false
      });
    }
  }

  async onClickDownload(event) {
  	var doc_id = event.currentTarget.dataset.i;
  	var api_url = `/api/v0/documents/${doc_id}/`;

  	var response = await GET(api_url);
  	var local_url = response["data"]["uploading_files"];
	var fileName = local_url.split('\\').pop().split('/').pop();

	const instance = axios.create({
  		responseType: "blob",
  		headers: {
  			"Access-Control-Allow-Origin": "*",
  			"Content-Type": 'application/actet-stream; charset=urf-8'
  		}
  	})

  	instance.get(local_url).then(function(response) {
  		var objURL = window.URL.createObjectURL(new Blob([response.data]));
  		var linkToDownload = document.createElement('a');
  	
  		document.body.appendChild(linkToDownload);
  	
  		linkToDownload.style = "display: none";
  		linkToDownload.href = objURL;
  		linkToDownload.download = fileName;
  		linkToDownload.click();
  		
  		window.URL.revokeObjectURL(objURL);
  	})
  }

  render() {

    const { data, isLoading } = this.state;

    return (
      <div className="documents-container d-flex flex-dir--col">
        <Header title="Документы" subtitle="Документы предприятия"/>
        <div className="documents-content">
          {!isLoading &&
						<React.Fragment>
						  {data["category"]["isError"] ?
						    <div className="error-message">
						      <p>{data["category"]["error"].message}</p>
						    </div>
						    :
						    <React.Fragment>
						      {data["documents"]["isError"] ?
						        <div className="error-message">
						          <p>data["documents"]["error"].message</p>
						        </div>
						        :
						        <div className="documents-content container d-flex flex-dir--col">
						          {
						            data["category"]["data"].map((element, index) => {
						              return (
						                <div key={index.toString()} className="doc-category-container">
						                  <div className="container__title container--light-bg">
						                    <h2>{element["name"]}</h2>
						                    <p>{element["descriptor"]}</p>
						                  </div>
						                  {
						                    data["documents"]["data"].map((item, item_index) => {
						                      return item["category_id"] === element["id"] &&
													<DocumentItems key={item_index.toString()}
													    title={item["title"]}
													    name={item["name"]}
														descriptor={item["descriptor"]}
														index={item["id"]}
														category={element["name"]}
														onClickDownload={this.onClickDownload}/>;
						                    })
						                  }
						                </div>
						              );
						            })
						          }
						        </div>
						      }
						    </React.Fragment>
						  }
						</React.Fragment>
          }
        </div>
      </div>
    );
  }

}

export default Documents;