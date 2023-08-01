import { App } from "vue";
import { Starter } from "./Starter";
import contextmenu from "v-contextmenu";
import "v-contextmenu/dist/themes/default.css";


export class pinia_starter implements Starter {
    name: string = "v_contextmenu_starter"
    start(app: App) {
        app.use(contextmenu)
    }
}