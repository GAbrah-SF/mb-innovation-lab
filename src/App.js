import './css/App.css';
import './css/ButtonStyle.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HeaderComponent} from './header/HeaderComponent';
import {FooterComponent} from './footer/FooterComponent';
import {
    PromotionsComponent,
    CatalogsComponents,
    SearchComponent,
    ShoppingComponent,
    FinishShoppingComponent,
    SessionComponent,
    NewUserComponent
} from './body';

function Layout({ children, showFooter = true }) {
    return (
        <>
            <div className="page-container">
                <HeaderComponent/>
                {children}
            </div>
            <div className={`content-wrapper`}>
                {showFooter && <FooterComponent />}
            </div>
        </>
    );
}

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    {/* Ruta para el home */}
                    <Route
                        path="/"
                        element={
                            <Layout>
                                <PromotionsComponent/>
                                <CatalogsComponents/>
                            </Layout>
                        }
                    />

                    {/* Ruta para búsquedas y compras */}
                    <Route
                        path="/busqueda"
                        element={
                            <Layout>
                                <SearchComponent/>
                            </Layout>
                        }
                    />
                    <Route
                        path="/compra"
                        element={
                            <Layout>
                                <ShoppingComponent/>
                            </Layout>
                        }
                    />
                    <Route
                        path="/estado-compra"
                        element={
                            <Layout>
                                <FinishShoppingComponent/>
                            </Layout>
                        }
                    />

                    {/* Ruta para login */}
                    <Route path="/login" element={<SessionComponent/>}/>

                    {/* Ruta para registrar nuevo usuario */}
                    <Route
                        path="/nuevo-usuario"
                        element={
                            <Layout showFooter={false}>
                                <NewUserComponent/>
                            </Layout>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
