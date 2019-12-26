import React from "react";
import GET from "../../utils/axios_get";
import Header from "../../components/blocks/header/index";
import LicenceItem from "../../components/pages/licences/index";
import ContainerIsEmpty from "../../components/elements/is_empty";

class Licences extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    var api_url = "/api/v0/licences/";
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
      <div className="licences-container d-flex flex-dir--col">
        <Header title="Лицензии" subtitle="Лицензии на разработку продукции"/>
        <div className="container">
          {!isLoading &&
						<React.Fragment>
						  {data["isError"] ?
						    <div className="error-message">
						      <p>{data["error"].message}</p>
						    </div>
						    :
						    <React.Fragment>
						      {data["data"].lenght === 0 ?
						        <ContainerIsEmpty/>
						        :
						        data["data"].map((element, index) => {
						          return (
						            <LicenceItem key={index.toString()}
						              name={element.name}
						              title={element.title}
						              descriptor={element.descriptor}
						              image={element.image}
						            />
						          );
						        })
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

export default Licences;