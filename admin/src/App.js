import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getListAction } from './actions/galleryActions'

class App extends Component {
  componentDidMount() {
    this.props.getListAction()
  }

  renderGalleries() {
    return this.props.galleries.map(gallery => (
      <div>{gallery.name}</div>
    ));
  }

  render() {
    return (
      <div className="App">
        {this.renderGalleries()}
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
