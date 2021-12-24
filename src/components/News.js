import React, { Component } from 'react'

import NewsItem from './NewsItem'

export class News extends Component {
   
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false,
            page: 1
        }  
      }
    async componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=11f836398a3e4d9db29a3b44a01fca7e&page=1&pageSize=20";
   let data=await fetch(url);
   let parseData=await data.json();
   this.setState({articles: parseData.articles,totalResults:parseData.totalResults}); 
    }
    handlePreviousclick=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=11f836398a3e4d9db29a3b44a01fca7e&page=${this.state.page-1}&pageSize=20`;
      let data=await fetch(url);
      let parseData=await data.json();
      this.setState({articles: parseData.articles});
      this.state({
        page:this.state.page-1,
      })
    }
    handleNextclick=async()=>{
      if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

      }
      else{
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=11f836398a3e4d9db29a3b44a01fca7e&page=${this.state.page+1}&pageSize=20`;
      let data=await fetch(url);
      let parseData=await data.json();
      this.setState({articles: parseData.articles});
      this.state({
        page:this.state.page+1,
      })
    }
    }


    render() {
        return (
            <div className='container my-3'>
               <h2> Today's Top Headlines</h2>
               
               <div className="row my-3">
               {this.state.articles.map((element)=>{
                 return  <div className="col-md-3 mx-3 my-3" key={element.url}>
                 <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}/>
                 </div>
               })}

               <div className="conatiner d-flex justify-content-between my-3">
               <button  type="button" className="btn btn-dark" onClick={this.handlePreviousclick}> &larr; Previous</button>
               
               <button type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
               </div>
               </div> 
            </div>
        )
    }
}

export default News
