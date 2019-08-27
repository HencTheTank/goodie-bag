import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllCandiesThunk } from '../reducers'
import SingleCandy from './SingleCandy';

class AllCandies extends Component {

  componentDidMount() {
    this.props.getAllCandies();
  }
  render() {
    const candies = this.props.candies;
    console.log(candies)
    return (
      <div>
        <h1>hi</h1>
        {candies.map(currCandy => {
          return <SingleCandy candy={currCandy} key={currCandy.id} />
        })}
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  getAllCandies: () => dispatch(getAllCandiesThunk())
})

const mapStateToProps = state => (
  {
    candies: state.candies
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(AllCandies);
