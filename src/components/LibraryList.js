import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        console.log(this.props);
        return;
    }
}

// take state , map to props for LibraryList component
const mapStateToProps = state => {
    return { libraries: state.libraries }; //key is arbitrary
};


export default connect(mapStateToProps)(LibraryList);
