import React from 'react';

class Link extends React.Component {

  render() {
    const { active, children, onClick } = this.props;
    return (
      <button
        onClick={onClick}
        disabled={active}
        style={{
          marginLeft: '4px'
        }}
      >
        {children}
      </button>
    )
  }
}

export default Link;