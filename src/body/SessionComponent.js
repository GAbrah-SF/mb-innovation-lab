import React, {useState} from 'react';
import img_session from '../img/img_login.png';
import button_google from '../img/button_google.png';
import button_facebook from '../img/button_facebook.png';
import button_apple from '../img/button_apple.png';
import {ImgLogo} from "../logo";

function SessionComponent() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <ImgLogo/>
                </div>
                <div className="col-md-6"></div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <img src={img_session} style={{width: '100%'}} alt='Promociones'/>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div className="row col-md-12">
                        <h1>Inicia sesión</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email o nombre de
                                    usuario</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                                <div className="input-group">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="form-control"
                                        id="exampleInputPassword1"
                                    />
                                    <span
                                        className="input-group-text"
                                        onClick={togglePasswordVisibility}
                                        style={{cursor: 'pointer'}}
                                    >
                                        <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                                    </span>
                                </div>
                            </div>

                            <div className="form-check form-switch mt-4 mb-4">
                                <input className="form-check-input" type="checkbox" role="switch"
                                       id="rememberUser"/>
                                <label className="form-check-label" htmlFor="rememberUser">Recuerdame</label>
                            </div>

                            <button type="button" className="btn btn-lg btn-green-mb fs-2">
                                INICIAR SESIÓN
                            </button>
                            <span className='cursor-pointer'>¿Olvidaste tu contraseña?</span>

                            <div className="row d-flex align-items-center mt-5 mb-5">
                                <div className="col-md-4">
                                    <span className='cursor-pointer'>¿No tienes una cuenta?</span>
                                </div>
                                <div className="col-md-6">
                                    <a type="button" className="btn btn-black" href='/nuevo-usuario'>REGISTRARSE</a>
                                </div>
                            </div>

                            <h4>Inicia sesión con tus redes sociales</h4>

                            <div className='row'>
                                <div className="col-md-4 d-flex align-content-center justify-content-center">
                                    <img className='img-button' src={button_google} alt="Botón Google"/>
                                </div>
                                <div className="col-md-4 d-flex align-content-center justify-content-center">
                                    <img className='img-button' src={button_facebook} alt="Botón Facebook"/>
                                </div>
                                <div className="col-md-4 d-flex align-content-center justify-content-center">
                                    <img className='img-button' src={button_apple} alt="Botón Apple"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {SessionComponent};
