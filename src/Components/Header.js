import React, {Component} from 'react';
import '../css/Header.css';

class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      searchText:''
    }
  }

  searchMovie=()=>{
    const {searchText}=this.state;
    this.props.searchMovie(searchText);
    var searchInput = document.getElementById('search-input')
    searchInput.value=''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    this.props.handleChange(e);
  }

  handleKeyPress=(e)=>{
    if(e.key==="Enter"){
      this.searchMovie();
    }
  }

    render(){
        return(
            <div id="head">
                <h1>영화검색페이지</h1> <br />
                <input className="input" type="text" onChange={this.handleChange} id="search-input" name="seacrhText" placeholder="원하시는 영화를 검색해보세요"
                onKeyPress={this.handleKeyPress} name="searchText"/>
                <button onClick={this.searchMovie} id="btn">검색</button>
            </div>
        )
    }
}
export default Header;