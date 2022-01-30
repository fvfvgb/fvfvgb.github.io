import { createPinia } from "pinia"
import PiniaHookPlugin from "./plugins/hooks"

const pinia = createPinia()
pinia.use(PiniaHookPlugin)

export default pinia
export const piniaStore = pinia