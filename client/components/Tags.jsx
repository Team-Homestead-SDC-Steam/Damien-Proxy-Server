/* eslint-disable react/prop-types */
import React from 'react';

export default class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { tags: ['Game'] },
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h3>User Tag module</h3>
      </div>
    );
  }
}
