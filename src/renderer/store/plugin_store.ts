import { stores_name } from "@/base/common_constant";
import { registerStore } from "@/base/strore";
import { defineStore } from "pinia";

interface PluginState {
  searchText: string;
}
export const userStore = defineStore({
  id: "plugin_store",
  state: (): PluginState => ({
    searchText: "",
  }),
  actions: {
    init() {
      console.log(`${stores_name.plugin_store} init`);
      registerStore(stores_name.plugin_store, this);
    },
    setSearchText(searchText: string) {
      this.searchText = searchText;
    },
    search(searchText: string) {
      console.log(`search: ${searchText}`);
    },
  },
  getters: {},
});
