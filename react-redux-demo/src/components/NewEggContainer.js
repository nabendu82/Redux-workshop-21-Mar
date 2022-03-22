import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyEgg } from '../redux'

const NewEggContainer = (props) => {
    const [number, setNumber] = useState(1);

    return (
        <div>
            <h2>Number of Eggs - {props.numOfEggs}</h2>
            <input type="number" value={number} onChange={e => setNumber(e.target.value)}  />
            <button onClick={() => props.buyEgg(number)}>Buy {number} Egg</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfEggs: state.egg.numOfEggs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyEgg: (number) => dispatch(buyEgg(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEggContainer)