import { App } from "@vue/runtime-core";

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { Starter } from "./Starter";

export class ant_design_vue_starter implements Starter {
    name: string = "ant_design_vue_starter"
    start(app: App) {
        app.use(Antd)
    }
}