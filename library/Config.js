
"use strict";

var ini = require("multi-ini");

/**
 * Класс хранилища конфигураций.
 * @class CardinalKeeper.Config
 */

module.exports = class Config {
	
	get filename() {
		return this._filename;
	}
	
	get config() {
		return this._config;
	}
	
	constructor(filename) {
		me._filename = filename;
		me._config = ini.read(filename);
	}
	
	getParam(path, defaultValue) {
		let value = this.config;
		path = path.split(".");
		path.every(item => {
			if (item in value) {
				value = value[item];
			} else {
				value = defaultValue;
				return false;
			}
			return true;
		});
		return value;
	}
	
	setParam(path, value) {
		
	}
	
	isDefined(path) {
		path = path.split(".");
		let current = this.config;
		let defined = true;
		path.forEach(item => {
			if (item in current) {
				current = current[item];
			} else {
				defined = false;
				return false;
			}
		});
		return defined;
	}
	
	save(filename) {
		
	}
	
}