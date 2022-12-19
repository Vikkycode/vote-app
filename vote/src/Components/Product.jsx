import React, { Component } from 'react'
import {BiUpArrow} from 'react-icons/bi'
export default class Product extends Component {
     constructor(props){
         super(props)

         this.handleUpVote=this.handleUpVote.bind(this)
     }

    handleUpVote = ()=>(
        this.props.onVote(this.props.id)
    )
    

  render(props) {
    return (
      <div className='flex border my-2 w-full'>
          <div>
              <img src={this.props.productImageUrl}
              className="object-cover h-[100px] w-[100px]"
              alt="img"/>
          </div>
          <div className='pl-5'>

          <div className='flex items-center space-x-2'>
              <a onClick={this.handleUpVote}><BiUpArrow className='text-red-300' /></a>
              <a>{this.props.votes}</a>
          </div>
          <div>
              <h1 className=' font-bold'>{this.props.title}</h1>
          </div>
          <div>
              <p>{this.props.description}</p>
          </div>
          <div className='rounded-md'>
              <a href={this.props.url}
              className=''/>
          </div>
          <div className='flex items-center'>
              <p className='text-slate-500 pr-3 text-sm'>Submitted by:</p>
              <img src={this.props.submitterAvatarUrl}
              className='h-[30px] w-[30px] rounded-full'/>
          </div>
          </div>
      </div>
    )
  }
}
