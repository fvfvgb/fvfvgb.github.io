import { PiniaPluginContext } from "pinia"

export default function piniaHookPlugin(context: PiniaPluginContext) {
    const { store, options } = context
    if (options.oncreate) {
        options.oncreate(store)
    }
}

declare module 'pinia' {
    export interface DefineStoreOptions<Id, S, G, A> {
        oncreate?: (store: S) => any
    }
}