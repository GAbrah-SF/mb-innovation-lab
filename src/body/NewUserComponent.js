import '../css/NewUser.css'
import button_create from "../img/button_create.png";
import React from "react";

function NewUserComponent() {
    return (
        <>
            <div className="container">
                <h2 className='mt-5 text-center hr-green'>
                    Hola, te pedimos algunos datos para crear una cuenta de marca
                </h2>

                <form className='form-company mt-5 mb-5'>
                    <h3 className='mb-4'>Información de la empresa</h3>
                    <div className='row'>
                        <div className="mb-3 col-md-4">
                            <label htmlFor="name_company" className="form-label">Nombre Comercial</label>
                            <input type="text" className="form-control" id="name_company"
                                   placeholder="Nombre Comercial"/>
                        </div>
                        <div className="mb-3 col-md-4">
                            <label htmlFor="phone_company" className="form-label">Teléfono de la empresa</label>
                            <input type="text" className="form-control" id="phone_company" minLength='10'
                                   maxLength='10' placeholder='Teléfono'/>
                        </div>
                        <div className="mb-3 col-md-4">
                            <label htmlFor="email_company" className="form-label">Correo de la empresa</label>
                            <input type="email" className="form-control" id="email_company" placeholder='Correo'/>
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="csf_company" className="form-label">CSF</label>
                            <button className='btn btn-lg btn-green-mb'>Upload</button>
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="idenof_company" className="form-label">Identificación Oficial</label>
                            <button className='btn btn-lg btn-green-mb'>Upload</button>
                        </div>
                    </div>

                    <h3 className='mb-4'>Dirección</h3>
                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <label htmlFor="address_company" className="form-label">Calle</label>
                            <input type="text" className="form-control" id="address_company"
                                   placeholder="Calle"/>
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="num_ext_company" className="form-label">Número exterior</label>
                            <input type="text" className="form-control" id="num_ext_company"
                                   placeholder="Número exterior"/>
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="num_int_company" className="form-label">Número interior</label>
                            <input type="text" className="form-control" id="num_int_company"
                                   placeholder="Número interior"/>
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="colony_company" className="form-label">Colonia</label>
                            <input type="text" className="form-control" id="colony_company"
                                   placeholder="Colonia"/>
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="cp_company" className="form-label">Código Postal</label>
                            <input type="text" className="form-control" id="cp_company" minLength='5'
                                   maxLength='5' placeholder='CP'/>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <div className='mb-3 form-check'>
                            <input type="checkbox" className="form-check-input" id="check-terminos"/>
                            <label className="form-check-label" htmlFor="check-terminos">
                                Acepto los Términos y condiciones y autorizo el uso de mis datos de acuerdo a la
                                Declaración de Privacidad.
                            </label>
                        </div>
                        <div className='mb-3 form-check'>
                            <input type="checkbox" className="form-check-input" id="check-send-email"/>
                            <label className="form-check-label" htmlFor="check-send-email">
                                Acepto recibir información por correo.
                            </label>
                        </div>
                    </div>

                    <div className='mt-4 d-flex justify-content-center align-items-center'>
                        <img className='img-button-create' src={button_create} alt="Botón Crear"/>
                    </div>
                </form>
            </div>
        </>
    )
}

export {NewUserComponent}
