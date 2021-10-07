import React, {Component} from 'react';
import '../css/movie.css';

class Movie extends Component{

    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            actorList: this.props.actor,
            directorList: this.props.director,
        }
    }
    render(){
        var { title, actorList, directorList } = this.state;
        var result = new Array();
        result = actorList.split("|");
        actorList = result.map(actor => <span className="actor">{actor}</span>);
        result = directorList.split("|");
        directorList = result.map(director => <span className="director">{director}</span>);
    
        return(
            
            <div id="movie">

                <div id="movie-left">
                    <div dangerouslySetInnerHTML={{ __html: title }}></div>
                    <div><span>{this.props.subtitle}</span></div>
                    <div><span>네티즌</span><span>{this.props.userRating}</span></div>
                    <div><span>{this.props.pubDate}</span><span>개봉</span></div>
                    <div><span>감독</span><span>{directorList}</span></div>
                    <div><span>출연</span><span>{actorList}</span></div>
                    <div><h1 class="detail">상세소개:</h1><a href={this.props.link}>바로가기</a></div>
                </div>

                <div id="movie-right">
                    <img src={this.props.image}></img>
                </div>

            </div>
        )
    }
}

export default Movie;