import React, { Component } from 'react'
import styles from './Header.module.css'
import { connect } from 'react-redux';

class Form extends Component {
    state = {
        id : '',
        sign: '+',
        description : '',
        val : ''
    }

    handleChange = (e) =>{
       const name = e.target.name;
       const val = e.target.value;

            this.setState({
                [name]: val
            })
        const key = Math.floor(Math.random() * 1000)
        this.setState({
            id: (key+"")
        })

      
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        if (Number(this.state.val) >0){
            this.props.addNewBugde(this.state)
            this.setState({
                sign: '+',
                description: '',
                val: ''
            })

        }

    }
    render() {
        return (
            <div className="container center">
                <form className={""+styles.form} onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div class="col m2 input-field">
                            <select name="sign" onChange={this.handleChange} id="selectedTest" className="center">
                                <option value="+" selected>+</option>
                                <option value="-">-</option>
                            </select>
                        </div>
                        <div className="col m6 input-field">
                            <input type="text" onChange={this.handleChange} name="description" value={this.state.description} required placeholder="Add description" />
                            
                        </div>
                        <div className="col m2 input-field">
                            <input type="number" onChange={this.handleChange} name="val" value={this.state.val} placeholder="Value" required/>
                        </div>
                        <div className="col m2 input-field">
                            <button className="btn-floating"><i className="material-icons">check</i></button>
                            
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        bugdes : state
    }
}
const mapPropsTostate= (dispacher)=>{
    return{
        addNewBugde : (object) => dispacher({
            type : 'ADD_ENTRE',
            bugde : object
        })
    }
}

export default connect(mapStateToProps,mapPropsTostate)(Form)
