import React from 'react';
import {useMenuItems, useCategories} from '../js/methods'; // Importar los métodos

function MenuComponent() {
    // Usar los hooks personalizados
    const menuItems = useMenuItems();
    const categories = useCategories();

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {menuItems.map((item, index) => {
                                // Filtrar las categorías correspondientes al item actual
                                const relatedCategories = categories.filter(
                                    (category) => category.menu_id === item.id
                                );

                                return (
                                    <li className={`nav-item ${relatedCategories.length > 0 ? 'dropdown' : ''}`}
                                        key={index}>
                                        <a className={`nav-link ${relatedCategories.length > 0 ? 'dropdown-toggle' : ''}`}
                                           href={item.url_menu} id={`dropdown${index}`} role="button"
                                           data-bs-toggle={relatedCategories.length > 0 ? 'dropdown' : undefined}
                                           aria-expanded="false">
                                            {item.name_menu}
                                        </a>

                                        {relatedCategories.length > 0 && (
                                            <ul className="dropdown-menu" aria-labelledby={`dropdown${index}`}>
                                                {relatedCategories.map((category) => (
                                                    <li key={category.id}>
                                                        <a className="dropdown-item" href={`#${category.id}`}>
                                                            {category.name_category}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export {MenuComponent};
