import React,{Component} from 'react';
import MovieList from './Components/MovieList';
import Pagination from './Components/pagination';
import Header from './Components/Header.js';
import axios from 'axios';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      seacrhText:'',
      movieList:[],
      totalcount:0, //영화 갯수
      currentPage:1,
      moviePerPage:3
    }
  }
  
  getMovies=async(seacrhText)=>{
    await axios({
       method: 'get',
        url: '/v1/search/movie.json?query='+seacrhText,
        dataType: 'json',
        headers: {
          "X-Naver-Client-Id": 'DWXCXAgVP0Y2aAfdCDkm',
          "X-Naver-Client-Secret": 'iMRUK0lsdl',
        },
    })
    .then(response => { 
      this.setState({ movieList:[] });
      const movie = response.data.items;
      console.log(movie);
      let mObj = null;
      this.setState({
        totalcount:movie.length
      })
      for(let i=0; i<movie.length; i++){
        mObj={
          actor:movie[i].actor,
          director:movie[i].director,
          image:movie[i].image,
          link:movie[i].link,
          pubDate:movie[i].pubDate,
          subtitle:movie[i].subtitle,
          title:movie[i].title,
          userRating:movie[i].userRating
        }
        this.setState({movieList: this.state.movieList.concat(mObj)})
        mObj = null
      }
    })
  }
  componentDidMount() {
    
  }
    
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  searchMovie=(seacrhText)=>{
    this.getMovies(seacrhText);
  }

  currentMovieList=(totalmovieList)=> {
    const {currentPage,moviePerPage}=this.state;
    const indexOfLast = currentPage*moviePerPage;
    const indexOfFirst = indexOfLast-moviePerPage;
    const slicePosts = totalmovieList.slice(indexOfFirst,indexOfLast);
    return slicePosts;
  }
    
  setCurrentPage=(page)=>{
    alert("페이지 변경(App)"+page);
    this.setState({
      currentPage:page
    })
    
  }

      
  render() {
    const {movieList,moviePerPage,currentPage,totalcount}=this.state;
    
    return (
      <div className="App ">
        <header className="header">
          <Header handleChange={this.handleChange} searchMovie={this.searchMovie}></Header>
        </header>
        
        <section>
          <MovieList movieList={this.currentMovieList(movieList)}></MovieList>
        </section>

        <footer>
          <Pagination moviePerPage={moviePerPage} totalcount={totalcount}
          currentPage={currentPage}
          setCurrentPage = {this.setCurrentPage}></Pagination>
        </footer>
      </div>
    );
  }
}

export default App;