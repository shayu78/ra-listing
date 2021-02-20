import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Card(props) {
  const { item } = props;

  const cutTitle = item.title.length > 50 ? `${item.title.substr(0, 50)}...` : item.title;

  const quantityClass = classnames({
    'item-quantity': true,
    'level-high': item.quantity > 20,
    'level-medium': item.quantity > 10 && item.quantity <= 20,
    'level-low': item.quantity <= 10
  });

  const currencySign = {
    USD: '$',
    EUR: '€',
  };

  return (
    <>
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt="" />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{cutTitle}</p>
        <p className="item-price">{currencySign[item.currency_code]
          ? `${currencySign[item.currency_code]}${item.price}`
          : `${item.price} ${item.currency_code}`}</p>
        <p className={quantityClass}>{item.quantity}</p>
      </div>
    </>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    listing_id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    MainImage: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    currency_code: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })
};
