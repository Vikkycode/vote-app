import React, { Component } from 'react'
import { productComponents } from '../data'
import Product from './Product'
class ProductList extends Component {
   
        state ={
            products:[],
        };

    componentDidMount(){
        this.setState({products: productComponents})
    }

    handleProductUpVote = (productId)=> {
       const nextProducts = this.state.products.map((product)=>{
           if(product.id === productId){
               return Object.assign({},product,{
                   votes:product.votes + 1,
               })
           } else{
               return product;
           }
       })
       this.setState({
           products:nextProducts,
       })
    }
  render() {
      const products = productComponents.sort((a,b)=>(
          b.votes - a.votes
      ))
    return (
      <div>
          <div className='flex flex-col items-start justify-between'>
             {this.state.products.map((product)=>(
                  <Product
                  key={'product-' + product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  url={product.url}
                  votes={product.votes}
                  submitterAvatarUrl={product.submittedAvatarUrl}
                  productImageUrl={product.productImageUrl}
                  onVote={this.handleProductUpVote}
                />
             ))}
          </div>
      </div>
    )
  }
}

export default ProductList