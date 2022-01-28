import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import styles from '@styles/Order.module.scss';
import OrderItem from './OrderItem';

const Order = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};

  return (
    <div className={styles.Order}>
        {state.cart.map((product) => (
							<OrderItem product={product} key={`orderItem-${product.id}`} />
					))}
        <p> Total: ${sumTotal()}</p>

    </div>
  );
};

export default Order;
