from flask import Flask
from flask_cors import CORS
from db_query import get_items

app = Flask(__name__)
CORS(app, origins='*')  # Habilita CORS


# Ruta para obtener los elementos de la tabla 'menu'
@app.route(f'/api/menu', methods=['GET'])
def get_menu():
    return get_items('menu')


# Ruta para obtener los elementos de la tabla 'categories'
@app.route(f'/api/categories', methods=['GET'])
def get_categories():
    return get_items('categories')


# Ruta para obtener los elementos de la tabla 'official_stores'
@app.route(f'/api/official_stores', methods=['GET'])
def get_official_stores():
    return get_items('official_stores')


if __name__ == "__main__":
    app.run(debug=True, port=5000, host='localhost')
