import style from "./navbar.module.css"
import picture from "./Logo1.jpg"
import picture1 from "./Logo2.jpg"
import picture3 from  "./SearchLogo.jpg"
const Navbar=()=>{
    return(
        <section id={style.nav}>
            <article>
                <div className={style.Logo}>
                <img src={picture} height="99%" width="100%" />
                </div>
                <div className={style.Menu}>
                    <li><a href="#">What we do</a></li>
                    <li><a href="#">Who we are</a></li>
                    <li><a href="#">Insights</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Investors</a></li>
                </div>
                <div className={style.Contact}>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Tcs worldwide</a></li>
                    <li><img src={picture3} height="50px" /></li>
                    <li><img src={picture1} height="65px" width="100px" /></li>
                </div>
            </article>
        </section>
    )
}

export default Navbar