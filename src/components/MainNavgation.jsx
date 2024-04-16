import React from 'react'
import {Link} from 'react-router-dom'
import classes from './MainNavgation.module.css'
export default function MainNavgation() {
  return (
    <header className={classes.header}>
        <nav>
            <ul className={classes.list}> 
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/products'}>products</Link></li>
            </ul>
        </nav>
    </header>
  )
}
