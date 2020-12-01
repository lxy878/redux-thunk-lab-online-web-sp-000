import React, { Component } from 'react';

import {connect} from 'react-redux'
import CatList from './CatList.js'
import {fetchCats} from './actions/catActions.js'

class App extends Component {
  componentDidMount(){
   this.props.fetchCats()
  }
  render() {
    return (
      <div className='App'>
       <h1>CatBook</h1>
       <CatList catPics={this.props.catPics}/>
     </div>
    );
  }
}

const  mapStateToProps = state =>{
  return {catPics: state.cats, loading: state.loading}
}

const mapDispatchToProps = dispatch => {
  return {fetchCats: () => dispatch(fetchCats())}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
