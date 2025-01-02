import mysql.connector
from mysql.connector import Error
import config

# Función para conectarse a la base de datos
def confirm_connection():
    global connection
    try:
        # Conexión a MySQL
        connection = mysql.connector.connect(
            host=config.HOST,
            user=config.USER,
            password=config.PASSWORD,
            database=config.DATABASE_NAME
        )

        if connection.is_connected():
            print(f"Conexión exitosa a MySQL.")
        return connection

    except Error as e:
        print(f"Error al conectar a MySQL: {e}")
        return None
