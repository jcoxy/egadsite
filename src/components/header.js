import * as React from "react"

const dummyLink = "#";

const Header = () => (
    <header>
        <div className="container header-content">
            <div className="header-links left">
                <div id="branding" className="wordmark">OxfordMosaic</div>
                <nav>
                    <ul className="nav__list">
                        <li className="nav__link"><a href={dummyLink}>Site admin</a></li>
                        <li className="nav__link"><a href={dummyLink}>Theme</a></li>
                        <li className="nav__link"><a href={dummyLink}>Content</a></li>
                    </ul>
                </nav>
            </div>
            <div className="header-links right">
                <button className="save-button">Save changes</button>
                <div className="profile-image"></div>
                <ul className="nav__list">
                    <li className="account-link"><a href={dummyLink}>Account</a></li>
                </ul>
            </div>
        </div>
    </header>
)

export default Header