import {useMenuItems, useCategories, useOfficialStores} from "../js/methods";
import {LastVisitComponent} from "./LastVisitComponent";

function CatalogsComponents() {
    const menuItems = useMenuItems();
    const categoryItems = useCategories();
    const officialStoreItems = useOfficialStores();

    return (
        <div style={{background: '#F3F3F5'}}>
            <div className="mb-5" style={{margin: '50px 50px 0'}}>
                {menuItems.filter(item => item.name_menu !== 'Vender' && item.name_menu !== 'Marcas')
                    .map((menuItem) => (
                        <div key={menuItem.id}>
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>{menuItem.name_menu}</h3>
                                </div>
                                {menuItem.name_menu !== 'Categorías' && (
                                    <div className="col-md-6 d-flex justify-content-end align-items-center">
                                        <h3 className="cursor-pointer">
                                            Ver todas <i className="bi bi-arrow-right"></i>
                                        </h3>
                                    </div>
                                )}
                            </div>
                            <div className="mt-3 mb-3 d-flex justify-content-start align-items-center">
                                {/* Filtra las categorías relacionadas con este menuItem */}
                                {categoryItems.filter(category => category.menu_id === menuItem.id)
                                    .map((category, index, array) => (
                                        <div className={`card ${index < array.length - 1 ? 'me-3' : ''}`}
                                             style={{width: '18rem'}} key={category.id}>
                                            <img src={category.img_url}
                                                 className="card-img-top" alt={category.name_category}/>

                                            <div className={`card-body`}>
                                                <h5 className={`card-title`}>{category.name_category}</h5>
                                                <a href={`/categories/${category.url_category}`} className={`url-a`}>Ver
                                                    todo</a>
                                            </div>
                                        </div>
                                    ))}

                                {officialStoreItems.filter(officialStore => officialStore.menu_id === menuItem.id)
                                    .map((officialStore, index, array) => (
                                        <div className={`${index < array.length - 1 ? 'me-3' : ''}`}
                                             style={{width: '18rem'}} key={officialStore.id}>
                                            <a href={officialStore.url_store} className={`url-a`}>
                                                <img src={officialStore.logo_url} className={`card-img-top`}
                                                     alt={officialStore.name_store}/>
                                            </a>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                <LastVisitComponent/>
            </div>
        </div>
    );
}

export {CatalogsComponents};
