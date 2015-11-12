
"use strict";

/**
 * Класс клиента СУБД PostgreSQL.
 * @class CardinalKeeper.database.postgres.PostgreSqlClient
 * @url https://github.com/vitaly-t/pg-promise
 */

var identityFn = v => { return v; };

module.exports = class PostgreSqlClient {
	
	constructor(options) {
		let me = this;
		options = options || {};
		me.initMonitor(options);
		me._postgres = require("pg-promise")(options);
	}
	
	initMonitor(options) {
		let me = this;
		me._monitor = require("pg-monitor");
		me._monitor.attach(options);
		me._monitor.setTheme({
		    time: identityFn,
		    value: identityFn,
		    cn: identityFn,
		    tx: identityFn,
		    paramTitle: identityFn,
		    errorTitle: identityFn,
		    query: identityFn,
		    special: identityFn,
		    error: identityFn,
		});
	}
	
	createAdapter(config) {
		return this._postgres(config);
	}
	
};