import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Header.module.css'

class Header extends Component {
      state = {
           available : '0.0',
           expense : '0.0',
           income : '0.0'
       }

static getDerivedStateFromProps(props, state) {
        const bugdets = props.bugdets.bugdets;

        const incomesBugdet = bugdets.filter(b =>{
            return b.sign === '+';
        }
        )
        const expenseBugde = bugdets.filter(b =>{
            return b.sign === '-';
        }
        )
        let incomes = 0.0;
        let expenses = 0.0;
        for(let a of incomesBugdet)
            incomes += Number(a.val)

        for(let e of expenseBugde)
            expenses += Number(e.val)
    
        
        state.available = (incomes - expenses)
        state.expense = expenses
        state.income = incomes
        return null;
    }
    
    render() {
        
        const month = new Date().getMonth()+1;
        const year = new Date().getFullYear();
        const day = new Date().getDate();
        return (
            <div className={styles.header}>
                    <div className="container center ">
                    <p className="white-text">Available Budget The {day}<sup>th</sup>-{month}-{year}:</p>
                    <h2 className="white-text">{this.state.available}.00</h2>

                    <div className="row">
    <div className={"col s12 l6 offset-l3 green "+styles.card}>
        <span className={styles.left}>INCOME</span><span>+{this.state.income}.00</span></div>
         <div className={"col s12 l6 offset-l3 red " + styles.card}>
             <span className={styles.left}>EXPENSES</span><span>-{this.state.expense}.00</span>
         </div>
                    </div>
                    </div>
            
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        bugdets: state
    }
}
export default connect(mapStateToProps)(Header)
