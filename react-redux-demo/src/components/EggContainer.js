import React from 'react'
import { connect } from 'react-redux'
import { buyEgg } from '../redux'

const EggContainer = (props) => {
    return (
        <div>
            <h2>Number of Eggs - {props.numOfEggs}</h2>
            <button onClick={props.buyEgg}>Buy Egg</button>
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
        buyEgg: () => dispatch(buyEgg())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EggContainer)