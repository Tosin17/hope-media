import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

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
          {description}
        </li>
      );
    });

    return list;
  }

  render() {
    return <ul>{this.renderStreamsList()}</ul>;
  }
}

const mapStateToProps = state => ({
  streams: Object.values(state.streams)
});
export default connect(
  mapStateToProps,
  {
    fetchStreams
  }
)(StreamList);
