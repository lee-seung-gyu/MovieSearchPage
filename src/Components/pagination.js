import React, {Component} from 'react';
import '../css/pagination.css';

class Pagination extends Component{
    constructor(props){
        super(props);
        this.state={
            moviePerPage:this.props.moviePerPage,
            totalcount:this.props.totalcount
        }
    }
    setCurrentPage=(page)=>{
        this.props.setCurrentPage(page);
    }
    prevPage=()=>{
        alert('이전 페이지!')
        const currentPage= this.props.currentPage
        if(currentPage==1){
            alert('1페이지 입니다!')
            alert('이전으로 갈 수 없없습니다.');
            return
        }
        this.props.setCurrentPage(currentPage-1);
    }
    nextPage=()=>{
        alert("다음 페이지!")
        const currentPage=this.props.currentPage
        const {moviePerPage,totalCount}=this.props;
        const lastPage=Math.ceil(totalCount/moviePerPage);
        if(lastPage===currentPage){
            alert("페이지의 끝에 도달했습니다!")
            alert("더이상 갈 수 없습니다!")
            return
        }
        this.props.setCurrentPage(currentPage+1);
    }

    render(){
        let pageNumbers=[];
        const {totalcount ,moviePerPage}= this.props;
        for(let i=1; i<=Math.ceil(totalcount / moviePerPage); i++){
            pageNumbers.push(i);
        }
        const pageList = pageNumbers.map(page=>(
            <span className="page" key={page} onClick={()=>this.setCurrentPage(page)}>
                {page}
            </span>

        ));
        return(
            <div id="pagination">
            <span className="page" onClick={this.prevPage}>&lt;</span>
            {pageList}
            <span className="page" onClick={this.nextPage}>&gt;</span>
        </div>
        )
    }
}

export default Pagination;