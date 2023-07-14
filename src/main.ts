import './theme.css'
import './app.css'
import App from './app.svelte'

// @ts-ignore
const app = new App({
  target: document.querySelector('app'),
})

export default app
