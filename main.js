'use strict';

const obsidian$1 = require("obsidian");

class ExtensionSettingTab extends obsidian$1.PluginSettingTab {
	constructor(app, plugin) {
		super(app, plugin);
		this.plugin = plugin;
	}
	display() {
		const { containerEl } = this;
		containerEl.empty();
		containerEl.createEl("h2", { text: "Settings for managing extensions." });
		new obsidian$1.Setting(containerEl)
		.setName("File Extensions")
		.setDesc("Comma delimited list of file extensions")
		.addText((text) => text.setPlaceholder("Enter your extensions")
		.setValue(this.plugin.settings.extensions).onChange(async (value) => {
			this.plugin.settings.extensions = value;
			await this.plugin.saveSettings();
		}));
	}
}

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
}
module.exports = ExtensionManager;
//export default ExtensionManager;
