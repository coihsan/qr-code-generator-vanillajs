import "./style.css";
import { Generate } from "./generator.js";

document.querySelector("#app").innerHTML = `
  <div class="app">
    <h2>QR Code Generator</h2>
    <div class="form">
      <input type="text" placeholder="Your Name" aria-placeholder="input your name" id="userName">
      <input type="email" placeholder="Your Email" aria-placeholder="input your email" id="userEmail">
      <input type="number" placeholder="Phone Number" aria-placeholder="input your phone number" id="userNumber">
      <button type="button" id="generate">Generate</button>
    </div>
    <div class="canvas">
      <img class="loading" src="/recycle.svg" alt="is loading" />
      <img src="" class="qr-code">
    </div>
  </div>
`;

Generate(document.querySelector("#generate"));
