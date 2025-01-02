import '../css/FooterComponent.css'
import {ImgLogo} from "../logo";

function FooterComponent() {
    const getCurrentYearInMexicoCity = () => {
        const date = new Date();
        const options = {timeZone: 'America/Mexico_City', year: 'numeric'};
        const formatter = new Intl.DateTimeFormat('en-US', options);
        return formatter.format(date);
    };

    return (
        <div className={`pt-3`} style={{background: '#FFF'}}>
            <div className={`container`}>
                <div className={`row hr-green`}>
                    <div className={`col-md-2 d-flex justify-content-center align-items-center`}>
                        <ImgLogo/>
                    </div>
                    <div className={`col-md-2`}>
                        <h4 className={`mb-4`}>Conoce más</h4>
                        <h6 className={`cursor-pointer`}>Nuestra Visión</h6>
                        <h6 className={`cursor-pointer`}>Cómo vender</h6>
                        <h6 className={`cursor-pointer`}>Cómo comprar</h6>
                    </div>
                    <div className={`col-md-2`}>
                        <h4 className={`mb-4`}>Seguridad en</h4>
                        <h6 className={`cursor-pointer`}>Envíos</h6>
                        <h6 className={`cursor-pointer`}>Formas de pago</h6>
                        <h6 className={`cursor-pointer`}>Garantías y Devoluciones</h6>
                    </div>
                    <div className={`col-md-2`}>
                        <h4 className={`mb-4`}>Contactanos</h4>
                        <h6 className=''>Teléfono: 123-456-7890</h6>
                        <h6 className=''>Correo: mail@gmail.com</h6>
                    </div>
                    <div className={`col-md-2`}>
                        <h4 className={`mb-4`}>Privacidad</h4>
                        <h6 className={`cursor-pointer`}>Aviso de privacidad</h6>
                        <h6 className={`cursor-pointer`}>Términos y Condiciones</h6>
                    </div>
                    <div className={`col-md-2`}>
                        <h4 className={`mb-4`}>Social</h4>
                        <i className={`m-2 cursor-pointer fs-4 bi bi-facebook`}></i>
                        <i className={`m-2 cursor-pointer fs-4 bi bi-instagram`}></i>
                        <i className={`m-2 cursor-pointer fs-4 bi bi-twitter-x`}></i>
                        <i className={`m-2 cursor-pointer fs-4 bi bi-tiktok`}></i>
                        <i className={`m-2 cursor-pointer fs-4 bi bi-linkedin`}></i>
                    </div>
                </div>
                <div>
                    <h5 className={`text-center p-4`}>Copyright {getCurrentYearInMexicoCity()}, All Rights Reserved</h5>
                </div>
            </div>
        </div>
    )
}

export {FooterComponent};
