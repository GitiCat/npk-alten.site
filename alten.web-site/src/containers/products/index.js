import React from 'react';
import GET from "../../utils/axios_get";
import Header from "../../components/blocks/header/index";
import ProductItem from "../../components/pages/products/index";

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    var api_url = [
      '/api/v0/products-category/',
      '/api/v0/products/'
    ];

    var response = {
      products: await GET(api_url[1]),
      category: await GET(api_url[0])
    };

    if(response["products"].lenght !== 0 && response["category"].lenght !== 0) {
      this.setState({
        data: response,
        isLoading: false
      });
    }
  }

  render() {

    const { data, isLoading } = this.state;

    return (
      <div className="p-c-container d-flex flex-dir--col">
        <Header title="Продукция" subtitle="Продкция, выпускаемая предприятием"/>
        <div className="p-c-content">
          {!isLoading && 
						<React.Fragment>
						  {data["category"]["isError"] ?
						    <div className="error-message">
						      <p>{data["category"]["error"].message}</p>
						    </div>
						    :
						    <React.Fragment>
						      {data["products"]["isError"] ?
						        <div className="error-message">
						          <p>{data["products"]["error"].message}</p>
						        </div>
						        :
						        <div className="p-c-items container d-flex flex-dir--col col-vp-start col-hp-start">
						          {
						            data["category"]["data"].map((element, index) => {
						              return (
						                <div key={index.toString()} className="p-c-category">
						                  <div className="container__title container--light-bg">
						                    <h2>{element["title"]}</h2>
						                  </div>
						                  <div className="container__litle-title container--light-bg">
						                    <div dangerouslySetInnerHTML={{ __html: element["descriptor"] }}></div>
						                  </div>
						                  <div className="p-items-list d-flex flex-dir--row row-vp-start row-hp-start">
						                    {
						                      data["products"]["data"][element.name].map((item, item_index) => {
						                        return (
						                          <ProductItem key={item_index.toString()}
						                            title={item["title"]}
						                            bg_image={item["bg_image"]}
						                            category_name={item["category_name"]}
						                            category={element["name"]}
						                            item_id={item_index.toString()}/>
						                        );
						                      })
						                    }
						                  </div>
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

export default Products;