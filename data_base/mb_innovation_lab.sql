SET NAMES utf8mb4;

-- Eliminar tabla 'menu' si ya existe
DROP TABLE IF EXISTS `menu`;

-- Crear tabla 'menu'
CREATE TABLE `menu` (
  `id` INT NOT NULL,
  `name_menu` VARCHAR(50) NOT NULL,
  `url_menu` TEXT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Insertar datos en 'menu'
INSERT INTO `menu` (`id`, `name_menu`, `url_menu`) VALUES
(1, 'Categorías', ''),
(2, 'Ofertas', ''),
(3, 'Tiendas oficiales', ''),
(4, 'Vender', ''),
(5, 'Marcas', '');

-- Eliminar tabla 'categories' si ya existe
DROP TABLE IF EXISTS `categories`;

-- Crear tabla 'categories' con relación a 'menu'
CREATE TABLE `categories` (
  `id` INT NOT NULL,
  `name_category` VARCHAR(15) NOT NULL,
  `img_url` TEXT,
  `url_category` TEXT,
  `menu_id` INT DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `menu_id` (`menu_id`),
  CONSTRAINT `fk_categories_menu` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Insertar datos en 'categories'
INSERT INTO `categories` (`id`, `name_category`, `img_url`, `url_category`, `menu_id`) VALUES
(1, 'Llantas', 'http://localhost:5000/static/img/categories/llanta.png', '', 1),
(2, 'Frenos', 'http://localhost:5000/static/img/categories/freno.png', '', 1),
(3, 'Rines', 'http://localhost:5000/static/img/categories/rin.png', '', 1),
(4, 'Baterías', 'http://localhost:5000/static/img/categories/bateria.png', '', 1),
(5, 'Asientos', 'http://localhost:5000/static/img/categories/asientos.jpg', '', 1);

-- Eliminar tabla 'official_stores' si ya existe
DROP TABLE IF EXISTS `official_stores`;

-- Crear tabla 'official_stores' con relación a 'menu'
CREATE TABLE `official_stores` (
  `id` INT NOT NULL,
  `name_store` VARCHAR(20) NOT NULL,
  `logo_url` TEXT,
  `url_store` TEXT,
  `menu_id` INT DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `menu_id` (`menu_id`),
  CONSTRAINT `fk_official_stores_menu` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Insertar datos en 'official_stores'
INSERT INTO `official_stores` (`id`, `name_store`, `logo_url`, `url_store`, `menu_id`) VALUES
(1, 'Trackone', 'http://localhost:5000/static/img/official_stores/Trackone.png', '', 3),
(2, 'Radec', 'http://localhost:5000/static/img/official_stores/Radec.png', '', 3),
(3, 'Totalparts', 'http://localhost:5000/static/img/official_stores/Totalparts.png', '', 3),
(4, 'EagleBHP', 'http://localhost:5000/static/img/official_stores/EagleBHP.png', '', 3),
(5, 'Dynamik', 'http://localhost:5000/static/img/official_stores/Dynamik.png', '', 3);
