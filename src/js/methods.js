import axios from 'axios';
import {useState, useEffect} from 'react';
import {url} from '../index'; // Asegúrate de que la URL esté correctamente definida

// Función genérica para obtener datos de un endpoint
const useFetchData = (endpoint) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${url}api/${endpoint}`).then(response => {
            setData(response.data);
        }).catch(error => {
            console.error(`Error fetching data from ${endpoint}:`, error);
        });
    }, [endpoint]);

    return data;
};

// Hook para obtener los items del Menú
export const useMenuItems = () => useFetchData('menu');

// Hook para obtener los items de las Categorías
export const useCategories = () => useFetchData('categories');

// Hook para obtener los logos de las Tiendas Oficiales
export const useOfficialStores = () => useFetchData('official_stores');
