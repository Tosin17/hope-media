import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderEditDeleteButtons = () => {
    if (!this.props.isSignedIn) {
      return null;
    }
    return (
      <div>
        <button type="button">Edit Stream</button>{' '}
        <button type="button">Delete Stream</button>
      </div>
    );
  };

  renderStreamsList() {
    if (!this.props.streams.length) {
      return (
        <div>
          No streams yet. <br />
          <br />{' '}
          <i>
            You can click <Link to="/streams/create">here</Link> to create
            streams
          </i>
        </div>
      );
    }

    const list = this.props.streams.map(({ id, title, description }) => {
      return (
        <li key={id}>
          {title} <br />
          {description} <br />
          {this.renderEditDeleteButtons()}
          <hr />
        </li>
      );
    });
    return list;
  }

  renderCreateButton() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to="/streams/create">Create Stream</Link> <br />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderCreateButton()}
        <ul>{this.renderStreamsList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  streams: Object.values(state.streams),
  isSignedIn: state.auth.isSignedIn
});
export default connect(
  mapStateToProps,
  {
    fetchStreams
  }
)(StreamList);
