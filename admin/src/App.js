import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { getListAction } from './actions/galleryActions'
import GalleryTable from './components/galleryTable'

class App extends Component {
  componentDidMount() {
    this.props.getListAction()
  }

  render() {
    return (
      <div className="App">
        <GalleryTable galleries={this.props.galleries} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    galleries: state.gallery.dataset
  };
}

export default connect(mapStateToProps, { getListAction })(App);
