import { App } from "@vue/runtime-core";

import { Starter } from "./Starter";
import { getStore } from "@/base/strore";
import { stores_name } from "@/base/common_constant";

export class plugin_starter implements Starter {
  name: string = "plugin_starter";
  start(app: App) {
    // @ts-ignore
    if (window.ctx) {
      ctx.plugin.on("PluginReady", ({ code, playload, type }) => {
        ctx.app.controller.setPlaceholder("回车搜索图片");
      });
      ctx.plugin.on("PluginOut", ({}) => {});
      ctx.plugin.on("inputChange", ({ text }) => {
        console.log(`inputChange: ${text}`);
        getStore(stores_name.plugin_store).setSearchText(text);
      });
      ctx.plugin.on("keydown", ({ keyCode, modifiers }) => {
        if (keyCode === "Enter") {
          getStore(stores_name.plugin_store).search(
            getStore(stores_name.plugin_store).searchText
          );
        }
      });
    }
  }
}
