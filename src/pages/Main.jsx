import { useState } from 'react';
import Footer from '../components/Footer';
import Section from '../components/Section';
import '../css/main.css'

const Main = () => {
    const [scrollTop,setScrollTop] = useState(0);
    window.addEventListener("scroll",function(){
        setScrollTop(window.scrollY);

    })
    return (  
        <div className='parallax'>
            <div className="paraScroll">scrollTop() : <span>{scrollTop}</span>px</div>
            <div className="paraInfo">
                <ul>
                    <li>#section1 offset() : <span className="offset1">0</span></li>
                    <li>#section2 offset() : <span className="offset2">0</span></li>
                    <li>#section3 offset() : <span className="offset3">0</span></li>
                    <li>#section4 offset() : <span className="offset4">0</span></li>
                    <li>#section5 offset() : <span className="offset5">0</span></li>
                    <li>#section6 offset() : <span className="offset6">0</span></li>
                    <li>#section7 offset() : <span className="offset7">0</span></li>
                    <li>#section8 offset() : <span className="offset8">0</span></li>
                    <li>#section9 offset() : <span className="offset9">0</span></li>
                </ul>
            </div>

            <nav className="paraNav">
                <ul>
                    <li className="active"><a href="#section1">s1</a></li>
                    <li><a href="#section2">s2</a></li>
                    <li><a href="#section3">s3</a></li>
                    <li><a href="#section4">s4</a></li>
                    <li><a href="#section5">s5</a></li>
                    <li><a href="#section6">s6</a></li>
                    <li><a href="#section7">s7</a></li>
                    <li><a href="#section8">s8</a></li>
                    <li><a href="#section9">s9</a></li>
                </ul>
            </nav>

            <header className='paraHeader'>
                <h1>Parallax Effect - Layout</h1>
                <p>패럴렉스 스크롤링 효과 - 레이아웃</p>
            </header>
            {/* header */}
            <main className="paraCont">
                <Section  num={"11"} desc={"높은 목표를 세우고, 스스로 채찍질 한다."} />
                <Section num={"12"} desc={"결과도 중요하지만, 과정을 더 중요하게 생각한다."} />
                <Section num={"13"} desc={"매 순간에 최선을 다하고, 끊임없이 변화한다."}/>
                <Section num={"14"} desc={"모든지 기본을 중요하게 생각한다."} />
                <Section num={"15"} desc={"열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다."} />
                <Section num={"16"} desc={"천 마디 말보단 하나의 행동이 더 값지다."} />
                <Section num={"17"} desc={"조그만 성공에 만족하지 않으며, 방심을 경계한다."} />
                <Section num={"18"} desc={"나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다."} />
                <Section num={"19"} desc={"꿈이 있다면, 그 꿈을 잡고 절대 놓아주지마라."} />
            </main>
            {/* main */}
            <Footer />
            {/* footer */}
        </div>
    );
}
 
export default Main;