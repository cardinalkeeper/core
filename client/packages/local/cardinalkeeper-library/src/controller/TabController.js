
/* global Ext */

/**
 * @class
 * Базовый класс контроллеров видов модулей для DesktopTabPanel.
 */

Ext.define("Cardinalkeeper.library.controller.TabController", {
	
	extend: "Cardinalkeeper.library.controller.BaseController",
	
	config: {
		/**
		 * @cfg
		 */
		menu: null
	},
	
	/**
	 * Инициализация.
	 */
	init: function() {
		var me = this;
		
		/**
		 * @property
		 * Массив вкладок.
		 */
		me.tabs = [];
		
		// Главное меню модуля.
		var mainMenuStore = me.getApplication().getMainMenuStore();
		mainMenuStore.getRoot().appendChild(me.getMenu());
		
		// Главный маршрут модуля.
		// Выбранный путь :path конвертируется в имя класса вида модуля, 
		// на основе которого создается сам вид и добавляется в DesktopTabPanel.
		var routes = {};
		routes["/" + me.getMenu().path + "/:path"] = {
			action: "openViewByPath",
			conditions: {
				":path": "(.*?)/?"
			}
		};
		me.setRoutes(routes);
		
	},
	
	/**
	 * Открыть вид по пути.
	 */
	openViewByPath: function(path) {
		var me = this;
		
		path = me.getMenu().path + (path ? "/" + path : "");
		
		var tabPanel = me.getApplication().getController("Root").getDesktopTabPanel();
		
		var viewClassName = me.getNameViewByPath(path);
		var view = Ext.ClassManager.get(viewClassName);
		
		if (!view) console.warn("Не найден вид класса", viewClassName);
		
		if (view) {
			var tab = tabPanel.items.get(me.tabs[viewClassName]);
			
			if (!tab) {
				tab = view.create({
					closable: true
				});
				me.tabs[viewClassName] = tab.getId();
				tabPanel.add(tab);
			}
			
			tabPanel.setActiveTab(tab);
		}
	},
	
	/**
	 * Конвертация пути в имя вида (название класса).
	 */
	getNameViewByPath: function(path) {
		var me = this;
		var result;
		path = path.split("/");
		var namespace = me.getNamespace() + ".view.tab.";
		var last = path.length - 1;
		path[last] = path[last] + "." + Ext.String.capitalize(path[last]);
		result = namespace + path.join(".");
		return result;
	}
	
});