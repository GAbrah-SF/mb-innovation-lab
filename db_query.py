from flask import jsonify
from mysql.connector import connect, Error
from db_connection import confirm_connection


def get_items(name_table):
    try:
        # Crear una nueva conexión local
        connection = confirm_connection()
        if connection:
            cursor = connection.cursor(dictionary=True)
            query = f"SELECT * FROM {name_table}"
            cursor.execute(query)

            # Obtén los resultados como diccionarios
            result = cursor.fetchall()

            # Devuelve el resultado directamente
            return jsonify(result)
        else:
            return jsonify({"error": "No se pudo conectar a la base de datos"}), 500

    except Error as e:
        return jsonify({"error": "Error al obtener los elementos"}), 500

    finally:
        # Asegúrate de cerrar el cursor y la conexión
        if 'cursor' in locals() and cursor:
            cursor.close()
        if 'connection' in locals() and connection:
            connection.close()
