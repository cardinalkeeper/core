
/* global Ext */

/**
 * @class
 * Базовый класс моделей.
 */

Ext.define("Cardinalkeeper.library.model.Base", {
	
	extend: "Ext.data.Model",
	
	clientIdProperty: "client_id",
	
	identifier: "sequential",
	
	schema: {
		namespace: "Cardinalkeeper.model",
		proxy: {
			type: "rest",
			//url: "application/rest/{entityName:uncapitalize}",
			reader: {
				type: "json",
				rootProperty: "data",
				totalProperty: "total",
				successProperty: "success",
				messageProperty: "error"
			},
			writer: {
				type: "json"
			}
		}
	}
	
});