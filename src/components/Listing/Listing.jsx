import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

export default function Listing(props) {
  const { items } = props;

  return (
    <div className="item-list">
      {items.map((value) => value.state === 'active'
        ? <div key={value.listing_id} className="item"><Card item={value} /></div> : false)}
    </div>
  );
}

Listing.defaultProps = {
  items: [],
};

Listing.propTypes = {
  items: PropTypes.array,
};
