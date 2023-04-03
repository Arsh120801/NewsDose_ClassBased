import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country:'us',
    pagesize: 9,
    category:'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,
  }
  articles=[]

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }  
  constructor(props){
    super(props);
    this.state={
        articles: this.articles,
        page:0,
        loading: false,
        firstloading:false,
        totalresult:0,
    }
    document.title=`${this.capitalizeFirstLetter( this.props.category )} - NewsDose`;
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pagesize=${this.props.pagesize}`;
    this.setState({loading:true,firstloading:true,})
    let data= await fetch(url);
    let parsed = await data.json();
    let mxpgs = Math.ceil(parsed.totalResults/9);
   // console.log(parsed)
    this.setState({
        articles:parsed.articles,
        page:1,
        mxpgs:mxpgs,
        loading:false,
        firstloading:false,
        totalresults:parsed.totalResults,
    })
  }
  async componentDidUpdate(prevProps){
    if(this.props!==prevProps){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5cccccdbca494e04bd41f974523ffbac&page=1&pagesize=${this.props.pagesize}`;
      this.setState({loading:true,firstloading:true,})
      let data= await fetch(url);
      let parsed = await data.json();
      let mxpgs = Math.ceil(parsed.totalResults/9);
      // console.log(parsed)
      this.setState({
          articles:parsed.articles,
          page:1,
          mxpgs:mxpgs,
          loading:false,
          firstloading:false,
          totalresults:parsed.totalResults,
      })
    }
  }

/*privousclicked=async ()=>{
    let page = this.state.page-1;
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5cccccdbca494e04bd41f974523ffbac&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true,})
    let data= await fetch(url);
    let parsed = await data.json();
    this.setState({
        articles:parsed.articles,
        page:page,
        loading:false,
    })
    console.log(page)
  }
  nextclicked=async ()=>{
    let page = this.state.page+1;
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5cccccdbca494e04bd41f974523ffbac&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true,})
    let data= await fetch(url);
    let parsed = await data.json();
    this.setState({
        articles:parsed.articles,
        page:page,
        loading:false,
    })
    //console.log(page)
  }*/

  fetchMoreData=async()=>{
    let page = this.state.page+1;
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5cccccdbca494e04bd41f974523ffbac&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true,})
    let data= await fetch(url);
    let parsed = await data.json()
    this.setState({
        articles:this.state.articles.concat(parsed.articles),
        page:page,
        loading:false,
    })
  }

  render() {
    return (
      <div className='container my-4'>
        <h1 className='text-center'>NewsDose - Be Upadated Everytime!</h1>
        
        {this.state.firstloading&&<Spinner/>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalresult}
          loader={this.state.loading&&<Spinner/>}
        >

           <div className="container">
            <div className='row my-3'>
                  {!this.state.firstloding && this.state.articles.map((e)=>{
                      return <div className='col-md-4' key={e.url}>
                          <Newsitem title={e.title?e.title.slice(0,40)+'...':e.title} description={e.description?e.description.slice(0,115)+'...':e.description} imgurl={e.urlToImage} newsurl={e.url} author={e.author} date={e.publishedAt}/>
                      </div>
                  })}
            </div>
           </div>

        </InfiniteScroll>

        {/*<div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.privousclicked}>Privious</button>
            <button type="button" disabled={this.state.page>=this.state.mxpgs-1} className="btn btn-dark" onClick={this.nextclicked}>Next</button>
        </div>*/}
      </div>
    )
  }
}

export default News
//look how button is disabled with condition