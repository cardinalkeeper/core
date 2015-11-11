
Общая архитектура модуля
----------------------

Модуль это объединение ресурсов.

Ресурс в свою очередь объединяет действия над ресурсом.

Действия могут быть create, destroy, update, index.

Примерная структура модуля:

```
client
resourse
	resourse1
		create.js
		destroy.js
		update.js
		index.js
	resourse2
	resourse3
module.js
package.json
```

Cardinalkeeper
--------------

Объект этого класса представлен в единственном экземпляре (cинглтон)
и его можно получить вызвав фукнцию `require("cardinalkeeper")`.

### action(name, handler)

Метод создает действие.

- name имя действия
- handler функция-обработчик `function(request, response) {...}`

В функции-обработчике переменная `this` является ссылкой на действие.
То есть по сути обработчик это метод объекта-действия.

``` javascript
module.exports = require("cardinalkeeper").action("create", function(request, response) {
	let me = this; // Ссылка на действие.
	...
});
```


### module(config)

Метод создает модуль.

Здесь config объект с возможными опциями:

name Имя модуля
client Конфигурация клиента, см. конструктор класса `Cardinalkeeper.module.Client`.

```javascript
module.exports = require("cardinalkeeper").module({
	name: "contractor",
	client: {
		name: "Cardinalkeeper.module.contractor",
		homedir: __dirname + "/client",
		controllers: ["Root"]
	}
});
```

Cardinalkeeper.module.Client
----------------------------

### Конструктор 

На вход конструктора подается объект со следующими полями:

- name: Имя пространства имен, например `"Cardinalkeeper.module.contractor"`.
- homedir: Каталог с клиентом (можно не задавать, тогда ищется каталог `client`).
- controllers: Массив с именами контроллеров, например `["Root"]`.

Например:

```javascript
module.exports = require("cardinalkeeper").module({
	name: "contractor",
	client: {
		name: "Cardinalkeeper.module.contractor",
		homedir: __dirname + "/client",
		controllers: ["Root"]
	}
});
```

