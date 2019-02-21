import React, { Component, createContext } from 'react'
import products from '../../products.json';

const myContext = createContext();
export class ContextProvider extends Component {
        state = {
            products: [],
            finalProduct: [],
            isLoading: true
        }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate() {
        console.log(this.state.finalProduct)
    }

    fetchData = () => {
        setTimeout(() => {
            this.setState({
            products: products,
            isLoading: false
        })
        }, 1000) 
    }

    getProductDetails = (productID, optionsCapacityID, CapacityID, optionsColorID, ColorID) => {
        this.setState({
            finalProduct: [
                {
                    id: productID,
                    options: 
                    [
                        {
                            id: optionsCapacityID,
                            value: CapacityID
                        },
                        {
                            id: optionsColorID,
                            value: ColorID
                        }
                    ]
                }
            ]
        })
    }

  render() {
    console.log(this.state.products)
    return (
        <myContext.Provider value={{
            state: this.state,

            updateProduct: (productID, optionsCapacityID, CapacityID, optionsColorID, ColorID) => {
                this.getProductDetails(productID, optionsCapacityID, CapacityID, optionsColorID, ColorID)
            },

            updateUser: () => {

            }
        }}>

        {this.props.children}
        </myContext.Provider>
    )
  }
}

export default myContext;