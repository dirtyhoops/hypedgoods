import React from 'react';
import { Link } from 'react-router-dom';

const RecentOrders = props => {
  const { recentOrders } = props;
  return (
    <div className='recent-orders'>
      <h4>RECENT ORDERS</h4>
      {recentOrders.length > 0 ? (
        <div className='recent-orders-container'>
          {recentOrders.map((order, index) => (
            <Link to={`/order/${order._id}`}>
              <p>
                Order #: {order._id} - ${order.total}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className='no-recent-orders'>
          <p>You haven't placed any order</p>
        </div>
      )}
    </div>
  );
};

export default RecentOrders;
