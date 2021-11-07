import React from "react";
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component{
    render() {
        return (
            <h2>Basic App</h2>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)