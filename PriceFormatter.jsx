import React from 'react';
export const PriceFormatter = ({ price, currency = 'تومان' }) => {
  const formatted = new Intl.NumberFormat('fa-IR').format(price);
  return <span>{formatted} {currency}</span>;
};
