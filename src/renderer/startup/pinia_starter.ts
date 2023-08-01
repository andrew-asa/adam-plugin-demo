import { App } from "vue";
import { createPinia } from "pinia";
import { Starter } from "./Starter";

export class pinia_starter implements Starter {
    name: string = "pinia_starter"
    start(app: App) {
        app.use(createPinia())
    }
}