import { App } from '@vue/runtime-core'
import { Starter } from './Starter';
export function start(app: App) {
    const files = import.meta.glob('./*.ts', {
        eager: true
    });
    const starters: Starter[] = [];
    for (const path in files) {
        const module = files[path];
        // @ts-ignore
        for (const key in module) {
            // @ts-ignore
            const obj = module[key];
            if (typeof obj === "function" && obj.prototype instanceof Object) {
                const instance = new obj();
                if ("start" in instance && "name" in instance) {
                    starters.push(instance);
                }
            }
        }
    }
    for (const starter of starters) {
        // console.log(`start ${starter.name}`)
        starter.start(app);
    }
}
