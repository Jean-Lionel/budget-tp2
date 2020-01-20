import React, { Component } from 'react'
import { connect } from 'react-redux'


class Table extends Component {
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
                    <div>
                        <span>{budge.description}</span>
                <span>{budge.val}</span>

                    </div>
                )
            }
        )):(
            <div>

            </div>
        )

        const expensiveList = expenseBugde.length ? (expenseBugde.map
           (budge =>{
                return(
                    <div>
                        <span>{budge.description}</span>
                        <span>{budge.val}</span>
                    </div>
                )
            }
            ) ):(
                <div>

                </div>
            )

        return(
            <div className="container row">
                <div className="col s6 l6">
                    <p className="green-text">INCOME</p>

                    {incomeList}
                </div>
                <div className="col s6 l6">
                    <p className="red-text">EXPENSES</p>
                    {expensiveList}
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

export default connect(mapStateToProps)(Table)
