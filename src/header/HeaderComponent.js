import "../css/SearchComponent.css";
import {MenuComponent} from "./MenuComponent";
import {ImgLogo} from "../logo";

function HeaderComponent() {
    return (
        <div className={`fondoVerdeLimon`}>
            <div className={`row d-flex justify-content-center align-items-center`}>

                <div className={`col-md-2 text-center`}>
                    <ImgLogo/>
                </div>

                <div className={`col-md-5`}>
                    <form className={`container-fluid`} role="search">
                        <div className={`input-group`}>
                            <button type="submit" className={`input-group-text`} id="basic-addon1">
                                <i className={`bi bi-search`}></i></button>
                            <input className={`form-control`} type="search" aria-label="Search"/>
                        </div>
                    </form>
                </div>

                <div className={`col-md-2 d-flex justify-content-start`}>
                    <button type="button" className={`btn btn-light`}>Registrar tu auto</button>
                </div>

                <div className={`col-md-3`}>
                    <i className={`bi bi-chat-left-text fs-4 me-4 cursor-pointer`}></i>
                    <i className={`bi bi-bell fs-4 me-4 cursor-pointer`}></i>
                    <i className={`bi bi-cart3 fs-4 cursor-pointer`}></i>
                </div>

            </div>
            <div className={`row`}>
                <div className={`col-md-6`}>
                    <div className={`d-flex justify-content-end align-items-center`}>
                        <MenuComponent/>
                    </div>
                </div>
                <div className={`col-md-6 d-flex justify-content-center align-items-center`}>
                    <a className={`cursor-pointer url-a`} href='/login'>Ingresar</a>
                </div>
            </div>
        </div>
    )
}

export {HeaderComponent}

