import ExtensionSettingTab from './ExtensionSettingTab.js'
const obsidian = require("obsidian");
const DEFAULT_SETTINGS = {
	extensions: "markdown,mdx,txt"
};

class ExtensionManager extends obsidian.Plugin {
	async onload() {
		await this.loadSettings();
		this.addSettingTab(new ExtensionSettingTab(this.app, this));
		// Convert setting to array
		let exts = this.settings.extensions.split(",");
		exts = exts.map(function (el) {
			console.log(el);
			return el.trim();
		});
		// register the view and extensions
		this.registerExtensions(exts, "markdown");
	}
	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}
	async saveSettings() {
		await this.saveData(this.settings);
	}
};

module.exports = ExtensionManager;
//export default ExtensionManager;
