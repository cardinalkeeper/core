
/* global Ext, Pace */

/**
 * @class
 * Класс приложения.
 */

Ext.define("Cardinalkeeper.Application", {
	
	extend: "Ext.app.Application",
	
	config: {
		title: "Кардинал Кипер 2015"
	},
	
	/**
	 * Инициализация.
	 */
	init: function() {
		this.initPageTitle();
		console.log(this.getTitle() + ". Программа управления предприятием.");
		console.log("Версия Sencha Ext JS =", Ext.getVersion().version);
		console.log(Pace ? "Обнаружена Pace." : "Внимание, Pace недоступна.");
		this.getMainView().getViewModel().set("applicationTitle", this.getTitle());
	},
	
	/**
	 * Инициализация заголовка страницы.
	 */
	initPageTitle: function() {
		
		// TODO учитывать случай, когда в head уже есть свой title
		
		var title = "<title>" + this.getTitle() + "</title>";
		Ext.dom.Helper.append(Ext.getDoc().down("head"), title);
	},
	
	/**
	 * Действия после запуска.
	 */
	launch: function() {
		if (Pace) {
			Pace.stop();
			console.log("Pace успешно выключена.");
		}
	},

	/**
	 * Обработчик события "appupdate".
	 * Пока не ясно в какой момент он вызывается.
	 */
	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') window.location.reload();
			}
		);
	}
	
});