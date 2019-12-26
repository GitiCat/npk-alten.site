import React from "react";
import GET from "../../utils/axios_get";
import Header from "../../components/blocks/header/index";
import ContainerIsEmpty from "../../components/elements/is_empty";

class Publications extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {

    const { data, isLoading } = this.state;

    return (
      <div className="patents d-flex flex-dir--col">
        <Header title="Публикации" subtitle="Публикации предприятия"/>
        <div className="patents-container d-flex flex-dir--col">
          {!isLoading &&
						<React.Fragment>
						  <ContainerIsEmpty/>
						</React.Fragment>
          }
        </div>
      </div>
    );
  }
}

export default Publications;