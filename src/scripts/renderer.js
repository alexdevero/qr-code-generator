// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const qrcode = require('qrcode')

const canvas = document.querySelector('#canvas')
const textarea = document.querySelector('#textarea')
const btn = document.querySelector('#btn')

function generateQRCode() {
  qrcode.toCanvas(canvas, textarea.value)
    .then((url) => console.log(url))
    .catch(err => console.log(err))
}

btn.addEventListener('click', () => {
  generateQRCode()
})
