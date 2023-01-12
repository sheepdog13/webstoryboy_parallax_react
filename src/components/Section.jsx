import '../css/section.css'
const Section = (props) => {
    const num = props.num;

    const desc = props.desc
    return (  
        <section className={`section${num} content__item`}>
            <span className="content__item__num">{num}</span>
            <h2 className="content__item__title">section{num}</h2>
            <figure className="content__item__imgWrap">
                <div style={{backgroundImage: `url(https://webstoryboy.github.io/wtss/refer-effect/assets/img/bg${num}.jpg)`}} className="content__item__img"></div>
            </figure>
            <p className="content__item__desc">{desc}</p>
        </section>
    );
}
 
export default Section;