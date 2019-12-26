import React from "react";
import ProductItem from "../../components/pages/home/products/products";
import GET from "../../utils/axios_get";

class Products extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async componentDidMount() {

    var url = "/api/v0/products-category/";
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
          <h2>Продукция</h2>
          <p>У нас имеется широкий выбор выпускаемой продукции под любые нужды!</p>
        </div>
        {!isLoading && 
					<React.Fragment>
					  <div className="products-container d-flex flex-dir--row row-vp-start row-hp-start">
					    {data["isError"] ? 
					      <div className="error-message">
					        <p>
					          {data["error"].message}
					        </p>
					      </div>
							 : 
					      data["data"].map((element, index) => {
					        return (
					          <ProductItem key={index.toString()}
					            name={element.name}
					            title={element.title}
					            descriptor={element.descriptor}
					            image={element.bg_image}/>
					        );
					      })
							
					    }
					  </div>
					</React.Fragment>
        }
      </div>
    );
  }
}

export default Products;