import React,{useState} from 'react'
import "../Styles/App.css"
import Card from './Card'


const App = () => {
    const [disable, setDisable] = useState(true)

    const onEnebal = () => {
        return setDisable(false)
    }

    return (
        <div className="App">
            <div className="Cards">
                <Card Card="Card1" x="0" y="0" />
                <Card Card="Card2" x="200" y="" />
                <Card Card="Card3" x="0" y="200" />
                <Card Card="Card4" x="400" y="200" />
            </div>
        </div>
    )
}

export default App
