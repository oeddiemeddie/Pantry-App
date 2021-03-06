import React, {Component} from 'react'

import '../../App.css'
// import Axios from 'axios'

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foodName: this.props.editFood.foodName,
            foodPercentage: this.props.editFood.foodPercentage
        }
    }
    
    handleName = (e) => {
        this.setState({
            foodName: e.target.value
        })
    }

    handlePercentage = (e) => {
        this.setState({
            foodPercentage: e.target.value
        })
    }

//    addToggle = () => {
//        this.setState({
//            if()
//        })
//    }

    render() {
        return (
            <div className="EditForm Forms">
                <div className="Inputs">
                    <h2>EDIT {this.state.foodName}</h2>
                    <label>Food Name:
                        <input className="NameInput" id="editName" type="text" onChange={this.handleName} value={this.state.foodName} /></label>
                    <label className="EditLabel">
                        How Full is the Container?
                    </label>
                        <div className="percentDiv">
                        <p>0%</p>
                        <input className="PercentInput" type="range" min="0" max="100" list="tickmarks" onChange={this.handlePercentage} value={this.state.foodPercentage} />
                        <p>100%</p>
                        </div>
                </div>
                <div>
                    <button className="FormButton" onClick={() => {
                        this.props.updateFood(this.props.editFood.id, this.state.foodName, this.state.foodPercentage)
                        this.props.editToggle()
                        }} >Update Food</button>
                    <button className="FormButton cancelUpdateButton" onClick={() => {
                        this.props.editToggle()
                    }}>Cancel Update</button>
                </div>
            </div>
        )
    }
}

export default Edit