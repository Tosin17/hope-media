import React from 'react';

class Tabs extends React.Component {
  render() {
    const displayOnlyCurrentChild = ({ ref: _ref }) => {
      this.props.children.forEach(
        ({ ref }) => (ref.current.style.display = 'none')
      );
      _ref.current.style.display = 'block';
    };

    const tabButtons = this.props.children.map(child => {
      return (
        <button
          key={child.order}
          type="button"
          onClick={() => displayOnlyCurrentChild(child)}
          className="tabs__button"
        >
          {child.name}
        </button>
      );
    });

    return <div className="tab">{tabButtons}</div>;
  }
}

export default Tabs;
