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
            finalProduct: 
                {
                product: {
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
            }
            
        })
    }

    createFinalOrderDetails = (nameValue, surnameValue, emailValue, streetValue, cityValue, housenumberValue, zipValue) => {
        let finalProductCopy = {...this.state.finalProduct}
        console.log(finalProductCopy)
        this.setState({
            finalProduct: [
                finalProductCopy,
                {
                user: 
                    {
                        name: nameValue,
                        surname: surnameValue,
                        email: emailValue,
                        address: {
                            street: streetValue,
                            housenumber: housenumberValue,
                            city: cityValue,
                            postcode: zipValue
                        }
                    }
            }
            
            ],
            
        })
        this.sendData()
    }

    sendData = () => {
        console.log(this.state.finalProduct)
    }

  render() {
    
    return (
        <myContext.Provider value={{
            state: this.state,

            updateProduct: (productID, optionsCapacityID, CapacityID, optionsColorID, ColorID) => {
                this.getProductDetails(
                    productID, 
                    optionsCapacityID, 
                    CapacityID, 
                    optionsColorID, 
                    ColorID
                )
            },

            updateUser: (nameValue, surnameValue, emailValue, streetValue, cityValue, housenumberValue, zipValue) => {
                this.createFinalOrderDetails(
                    nameValue, 
                    surnameValue, 
                    emailValue, 
                    streetValue, 
                    cityValue, 
                    housenumberValue, 
                    zipValue
                )
            }
        }}>

        {this.props.children}
        </myContext.Provider>
    )
  }
}

export default myContext;