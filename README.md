
Cardinal Keeper 2015
====================

Небольшая программа управления собственным предприятием.

Версии программы:

http://semver.org/lang/ru/

Учитывая номер версии МАЖОРНАЯ.МИНОРНАЯ.ПАТЧ, следует увеличивать:

МАЖОРНУЮ версию, когда сделаны обратно несовместимые изменения API.
МИНОРНУЮ версию, когда вы добавляете новый функционал, не нарушая обратной совместимости.
ПАТЧ-версию, когда вы делаете обратно совместимые исправления.
Дополнительные обозначения для предрелизных и билд-метаданных возможны как дополнения к МАЖОРНАЯ.МИНОРНАЯ.ПАТЧ формату.

Инсталяция:
===========

## Первый этап:

Установка Node.js:

```
nvm ls-remote
nvm install v4.1.2
nvm use v4.1.2
nvm alias default v4.1.2
```

Установка пакетов:

```
npm install cardinalkeeper --save
bower install khusamov-extjs --save
bower install pace#~1.0.2 --save
bower cache clean
```

Вариант:

> `bower install ./node_modules/cardinalkeeper/ --save`

пока не катит, так как копирует и всю серверную часть в `bower_components`, 
чего и следовало ожидать судя по документации на команду 
`bower install <папка>`.

## Второй этап:

После установки пакетов нужно создать следующие файлы:

###.gitignore

```
npm-debug.log  
node_modules  
bower_components  
temp
```

###<название вашего проекта>.ini

###<название вашего проекта>.js


Глоссарий:
==========

Приложение

Экземпляр приложения может быть только один

Модуль приложения - на основе модуля Node.js

Модулей в приложении может быть сколько угодно

Ресурс модуля

Ресурсов в модуле можно быть сколько угодно

Роль приложения в базе данных одна

public схема приложения в базе данных

Имя модуля = схеме модуля в базе данных

На один модуль выделяется одна схема в базе данных

В главном меню для каждого модуля выделяется одно корневое меню

В конфиге для каждого модуля выделяется один раздел

В конфиге для приложения выделяется раздел application

Права доступа создаются в СУБД, дополнительные права - в приложении



Описание конфигурационного файла
================================

## Основные настройки

```
[application]
title = Кардинал Кипер 2015
port = 8080
```

## Подключение модулей

```
[application]
module[] = cardinalkeeper-document
module[] = cardinalkeeper-contractor
```

## Основная база данных

```
[application]
database.host = host
database.port = 5432
database.database = cardinal
database.user = cardinal
database.password = password
```

## Настройка сенчи

```
[application]
sencha.extjs.locale = ru
sencha.extjs.theme = crisp
sencha.extjs.debug = true
sencha.extjs.source.type = localhost
sencha.extjs.source.version = 5.1.1
```


## Разное

```
[application]
pace.enable = true
```


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




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

- [name] имя действия (не обязательный параметр, можно задать только обработчик)
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

