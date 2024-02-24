import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="app">
    <div class="form">
      <input type="text" placeholder="Your Name" aria-placeholder="input your name" id="userText">
      <input type="email" placeholder="Your Email" aria-placeholder="input your email" id="userEmail">
      <input type="number" placeholder="Phone Number" aria-placeholder="input your phone number" id="userNumber">
      <button type="button">Generate</button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
