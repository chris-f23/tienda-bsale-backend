# Endpoints

## ```GET /api/categories```

**Descripción**: Obtiene todas las categorías desde la base de datos.

## ```GET /api/products```

**Descripción**: Obtiene una cantidad limitada de productos desde la base de datos, respetando ciertos parámetros.

**parámetros**:
  * `'limit=NUMBER'`: Cantidad de productos a obtener. El valor mínimo es 10.
  El valor máximo es 100. Si no se utiliza este parámetro, entonces se usa el valor por defecto (20).
  Si el valor no está dentro del rango permitido, se usa el mínimo o máximo según corresponda.

  * `'page=NUMBER'`: El numero de la página de resultados.
  El valor mínimo es 1. Si no se especifica un valor, entonces se usa el valor por defecto (1). Si el valor supera la ultima página, se obtiene una lista vacía.
  
  * `'order_asc=STRING'`: Texto que define el atributo por el que se ordenan los productos a obtener, de manera ascendente.
  Sus posibles valores son `'name'`, `'price'`, `'discount'` y `'category'`.
  No puede usarse junto con `order_desc`.

  * `'order_desc=STRING'`: Texto que define el atributo por el que se ordenan los productos a obtener, de manera descendente.
  Sus posibles valores son `'name'`, `'price'`, `'discount'` y `'category'`.
  No puede usarse junto con `order_asc`.

Los siguientes parámetros sirven para filtrar los resultados.
  * `'search=STRING'`: Texto a coincidir con el nombre de uno o varios productos.
  El valor debe tener un mínimo de 2 caracteres y un máximo de 20 caracteres. Si el texto excede el máximo, se ignoran los caracteres restantes.

  * `'category=STRING'`: Texto que indica el nombre de la categoría de los productos a obtener. Si el nombre de la categoría no existe, entonces no se devuelven resultados.

  * `'price_min=NUMBER'`: Precio mínimo de los productos a obtener.

  * `'price_max=NUMBER'`: Precio máximo de los productos a obtener.
