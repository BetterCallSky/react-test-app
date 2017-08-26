import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import './Accordion.css';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }

  render() {
    const {title, children} = this.props;
    const {isOpen} = this.state;

    return (
      <div className={cn('Accordion', {isOpen})}>
        <div className="Accordion-title" onClick={() => this.setState({isOpen: !isOpen})}>
          {title}
        </div>
        {isOpen && <div className="Accordion-content">
          {children}
        </div>}
      </div>
    );
  }
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Accordion;
