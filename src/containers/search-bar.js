import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getVideoList} from '../actions/index';

class SearchBar extends Component {

    render() {
        return (<input type="text" onChange={event => {
            this.props.getVideoList(event.target.value)
        }}
                       className="col-md-3 form-control"/>)
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getVideoList: getVideoList
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)





