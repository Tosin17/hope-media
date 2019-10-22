import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderStreamsList() {
    if (!this.props.streams.length) {
      return <div>No streams yet</div>;
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
