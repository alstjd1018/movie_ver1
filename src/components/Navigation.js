import React from "react";
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(){
    return(
        <div className="nav">
            {/* <a href="/">Home</a>
            <a href="/about">About</a>   
            a태그는 새페이지가 열리는 문제가있다 
            why? a엘리먼트의 href속성은 페이지 전체를 다시그려주기때문 이상태라면 필요한 부분만 
            다시그려주는 리액트의 장점을 활용하기 힘들다*/}

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* <Link to={{ pathname: '/about', state: { fromNavigation: true}
            }}>About</Link>  p41*/} 
        </div>
    );
}

export default Navigation;