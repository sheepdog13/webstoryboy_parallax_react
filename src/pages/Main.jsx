import Footer from '../components/Footer';
import Section from '../components/Section';
import '../css/main.css'

const Main = () => {
    return (  
        <div className='parallax'>
            <header className='paraHeader'>
                <h1>Parallax Effect - Layout</h1>
                <p>패럴렉스 스크롤링 효과 - 레이아웃</p>
            </header>
            {/* header */}
            <main className="paraCont">
                <Section num={"1"} desc={"높은 목표를 세우고, 스스로 채찍질 한다."} />
                <Section num={"2"} desc={"결과도 중요하지만, 과정을 더 중요하게 생각한다."} />
                <Section num={"3"} desc={"매 순간에 최선을 다하고, 끊임없이 변화한다."}/>
                <Section num={"4"} desc={"모든지 기본을 중요하게 생각한다."} />
                <Section num={"5"} desc={"열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다."} />
                <Section num={"6"} desc={"천 마디 말보단 하나의 행동이 더 값지다."} />
                <Section num={"7"} desc={"조그만 성공에 만족하지 않으며, 방심을 경계한다."} />
                <Section num={"8"} desc={"나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다."} />
                <Section num={"9"} desc={"꿈이 있다면, 그 꿈을 잡고 절대 놓아주지마라."} />
            </main>
            {/* main */}
            <Footer />
            {/* footer */}
        </div>
    );
}
 
export default Main;