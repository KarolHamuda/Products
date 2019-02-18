import React, { Component, createContext } from 'react'
import products from '../../products.json';

const myContext = createContext();
export class ContextProvider extends Component {
        state = {
            products: [],
            isLoading: true
        }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        setTimeout(() => {
            this.setState({
            products: products,
            isLoading: false
        })
        }, 1000) 
    }

  render() {
    console.log(this.state.products)
    return (
        <myContext.Provider value={{
            state: this.state
        }}>

        {this.props.children}
        </myContext.Provider>
    )
  }
}

export default myContext;