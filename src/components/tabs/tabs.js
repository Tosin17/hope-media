import React from 'react';

const Tabs = props => {
  if (!props.children || !props.children.length) {
    return null;
  }

  //Initialize tab
  props.children.forEach(child => {
    child.ref.current.style.display = child.order === 1 ? 'block' : 'none';
  });

  const displayOnlyCurrentChild = ({ ref: _ref }) => {
    props.children.forEach(({ ref }) => (ref.current.style.display = 'none'));
    _ref.current.style.display = 'block';
  };

  const tabButtons = props.children.map(child => {
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
};

export default Tabs;
