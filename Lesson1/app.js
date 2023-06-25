const app = document.querySelector('#app')

const component = function () {
    const [status, setStatus] = React.useState(false)
    return (
        <div>
            <img style={{ maxWidth: 80 }} src={status ? "./images/on.png" : "./images/off.png"} />
            <button onClick={() => setStatus(!status)}>Switch</button>
        </div>
    )
}

const root = ReactDOM.createRoot(app)
root.render(React.createElement(component))


// const img = document.createElement("img")
// img.src = "./images/off.png"
// img.style.maxWidth = "80px"
// const bulkSwitch = document.createElement("button")
// bulkSwitch.innerText = "Turn on"

// app.appendChild(img)
// app.appendChild(bulkSwitch)

// bulkSwitch.onclick = function () {
//     if (img.src == "http://127.0.0.1:5500/lesson1/images/off.png") {
//         img.src = "./images/on.png"
//     } else {
//         img.src = "./images/off.png"
//     }
// }

// let _status = false

// const render = function () {
//     app.innerHTML = `
//         <img style="max-width:80px" src="${_status ? "./images/on.png" : "./images/off.png"} "/>
//         <button> Switch</button >
//             `
//     document.querySelector("button").onclick = function () {
//         _status = !_status
//         render()
//     }
// }

// render()