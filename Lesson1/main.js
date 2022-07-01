const element = React.createElement;

const LikeButton = function() {
    const [status, setStatus] = React.useState(false)
    return element('button', {onClick: () => setStatus(!status)}, `${status ? "Like" : "You liked it"}`)
}

const dom = document.getElementById('root')
const root = ReactDOM.createRoot(dom)
root.render(element(LikeButton))