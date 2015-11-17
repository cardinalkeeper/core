
/* global Ext */

/**
 * @class
 * Контроллер главного вида.
 */

Ext.define("Cardinalkeeper.view.main.MainController", {
	
	extend: "Ext.app.ViewController",
	
	alias: "controller.main",
	
	routes: {
		".*": "onAnyRoute"
	},
	
	/**
	 * Обработчик всех маршрутов.
	 */
	onAnyRoute: function() {
		var me = this;
		var selected = me.getNodeByPath(me.lookupReference("mainmenu").getRootNode(), me.getCurrentPath());
		me.lookupReference("mainmenu").selectPath(selected.getPath());
	},
	
	/**
	 * Получить узел из заданного узла по его пути.
	 * @param {Ext.data.TreeModel} node Узел, в котором производится поиск.
	 * @param {String} path Путь искомого узла.
	 */
	getNodeByPath: function(node, path) {
		var me = this;
		path = path.split("/");
		var finded = node.findChild("path", path[0]);
		if (finded) {
			path.shift();
			finded = me.getNodeByPath(finded, path.join("/"));
		} else {
			finded = node;
		}
		return finded;
	},
	
	/**
	 * Получить текущий путь из URL-страницы.
	 */
	getCurrentPath: function() {
		var path = document.location.hash.split("/");
		path.shift();
		return path.join("/");
	}
	
});