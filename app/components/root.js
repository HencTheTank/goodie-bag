import React from 'react'
import { Route, Link } from 'react-router-dom'
import AllCandies from './AllCandies';

const Root = () => {
  return (
    <div>
      <nav>
        Goodie Bag
        <Link to='/candies' >Go To candies </Link>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Route exact path='/candies' component={AllCandies} />
      </main>
    </div >
  )
}

export default Root
