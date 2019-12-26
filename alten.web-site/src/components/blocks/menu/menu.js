import React from "react"
import MenuIcon from '@material-ui/icons/Menu';

class Menu extends React.Component {

    constructor(props) {
        super(props)

        this.menuButtonOnClick = this.menuButtonOnClick.bind(this);
    }

    menuButtonOnClick(event) {
        event.preventDefault();
        var menu = document.getElementsByClassName("m-container")
        menu[0].classList.toggle("showing")

        if(menu[0].classList.contains('showing')) {
            document.body.style.overflow = 'hidden';
        } 
        else {
            document.body.style.overflow = '';
        }
    }

    render() {
        return (
            <div className="m-container">
                <div className="m-button--container d-flex flex-dir--col col-vp-center col-hp-center">
                    <div className="menu-icon d-flex flex-dir--col col-vp-center col-hp-center">
                        <div className="first"></div>
                        <div className="second"></div>
                        <div className="thind"></div>
                    </div>
                    <button onClick={this.menuButtonOnClick} className="abs-fscreen"></button>
                </div>
                <div className="navigation-panel d-flex flex-dir--row row-vp-start row-hp-start">
                    <div className="navigation-container d-flex flex-dir--col col-vp-center col-hp-start">
                        <a href="/">Главная</a>
                        <a href="/history">История</a>
                        <a href="/activity">Деятельность</a>
                        <a href="/documents">Документы</a>
                        <a href="/news">Новости</a>
                        <hr className="bg--middle-red"/>
                        <a href="/company/leadership">Руководство</a>
                        <a href="/company/publications">Публикации</a>
                        <a href="/company/licences">Лицензии</a>
                        <a href="/company/gallery">Галерея</a>
                    </div>
                    <div className="navigation-container d-flex flex-dir--col col-vp-center col-hp-start">
                        <a href="/products">
                            <div className="container__title container--dark-bg">
                                <p>Продукция</p>
                            </div>
                        </a>
                        <hr className="bg--middle-red"/>
                        <a href="/products/rechargeable-batteries/0">Аккумуляторные батареи</a>
                        <a href="/products/primary-current-sources/0">Первичные источники тока</a>
                        <a href="/products/zru/0">Зарядно - разрядные устройства</a>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Menu;