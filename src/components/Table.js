import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Header.module.css'


class Table extends Component {

    handleClick = (e)=>{
        this.props.deleteBugdet(e)
    }
    render() {
        const bugdets = this.props.bugdets.bugdets;
        const incomesBugdet = bugdets.filter(b => {
            return b.sign === '+'
        }
        )
        const expenseBugde = bugdets.filter(b => {
            return b.sign === '-'
        })

        const incomeList = incomesBugdet.length ? (incomesBugdet.map(
            budge =>{
                return(

                    <li className="collection-item">
                        <div>
                    <span>{budge.description}</span>
                        
                            <span className="secondary-content">+{budge.val}.00 &nbsp; 
                    <span className="btn-floating waves-effect pink lighten-1 white-text waves-light btn-small" onClick={(e)=>this.handleClick(budge)}>x</span>
                    </span>
                    </div></li>
                )
            }
        )):(
            <div>

            </div>
        )

        const expensiveList = expenseBugde.length ? (expenseBugde.map
           (budge =>{
                return(
                  
                    <li className="collection-item">
                        <div>
                            <span>{budge.description}</span>

                            <span className="secondary-content">-{budge.val}.00
                               &nbsp; <span className={"btn-floating pink lighten-1 white-text waves-effect waves-light btn-small"} onClick={(e) => this.handleClick(budge)}>x</span>
                            </span>
                        </div></li>
                )
            }
            ) ):(
                <div>

                </div>
            )

        return(
            <div className={"container row " + styles.table}>
                <div className="col s6 l6">
                    <p className="green-text">INCOME</p>
                    <ul className="collection">
                        {incomeList}

                    </ul>
                </div>
                <div className="col s6 l6">
                    <p className="red-text">EXPENSES</p>
                    <ul className="collection">
                        {expensiveList}

                    </ul>
                   
                </div>

            </div>
        )
       
    }
}

const mapStateToProps = (state) =>{
    return {
        bugdets : state
    }
}

const mapDispacherToProps =(dispacher) =>{
    return{
        deleteBugdet : (bugdet) => dispacher(
            {
                type: 'DELETE_BUGDE',
                budge: bugdet
            }
        )
    }

}

export default connect(mapStateToProps, mapDispacherToProps)(Table)
