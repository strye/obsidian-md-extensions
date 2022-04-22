const obsidian = require("obsidian");

class ExtensionSettingTab extends obsidian.PluginSettingTab {
	constructor(app, plugin) {
		super(app, plugin);
		this.plugin = plugin;
	}
	display() {
		const { containerEl } = this;
		containerEl.empty();
		containerEl.createEl("h2", { text: "Settings for managing extensions." });
		new obsidian.Setting(containerEl)
		.setName("File Extensions")
		.setDesc("Comma delimited list of file extensions")
		.addText((text) => text.setPlaceholder("Enter your extensions")
		.setValue(this.plugin.settings.extensions).onChange(async (value) => {
			this.plugin.settings.extensions = value;
			await this.plugin.saveSettings();
		}));
	}
};

export default ExtensionSettingTab;