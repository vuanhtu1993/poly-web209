const app = document.querySelector('#app')

// Imperative
// const bulb = document.createElement("img")
// bulb.src = "./images/off.png"
// bulb.style.maxWidth = "80px"
// const switchBtn = document.createElement("button")
// switchBtn.innerText = "Switch"
// // Event
// switchBtn.onclick = () => {

//     if (bulb.src == "http://127.0.0.1:5500/lesson1/images/off.png") {
//         bulb.src = "./images/on.png"
//     } else {
//         bulb.src = "./images/off.png"
//     }
// }

// app.appendChild(bulb)
// app.appendChild(switchBtn)


// Declarative
// let state = true

// const render = () => {
//     app.innerHTML = `
//         <img style="max-width: 80px" src="${state ? "./images/on.png" : "./images/off.png"}"/>
//         <button>Switch</button>
//     `
//     document.querySelector("button").onclick = function () {
//         state = !state
//         render()
//     }
// }

// render()

// React
const App = function () {
    const [status, setStatus] = React.useState(false)
    // JSX => JS * HTML
    return <div>
        <img style={{ maxWidth: 80 }} src={status ? "./images/on.png" : "./images/off.png"} />
        <button onClick={() => setStatus(!status)}>Switch</button>
    </div>
}

const root = ReactDOM.createRoot(app)
root.render(<App />)