import Head from 'next/head';
import React from 'react';
import Order from '@components/Order';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['Checkout-content']}>
            <div className={styles.order}>

            </div>
          </div>
          <Order />
        </div>
      </div>
    </>
  );
};

export default Checkout;
