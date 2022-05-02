import { TiDelete } from "react-icons/ti";

import { Loader, LoaderWrap } from "../../components/Loader/Loader";
import useOrders from "../../hooks/useOrders";
import fetcher from "../../utils/fetcher";

import styles from "./Orders.module.scss";

const Orders = () => {
  const { orders, loading: orderLoading } = useOrders();

  if (!orders?.length) return null;
  if (orderLoading) return <Loader />;

  const deleteOrder = async (id) => {
    try {
      await fetcher("api/cancelOrder", "DELETE", {
        id,
        auth: "auth",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.orders}>
      <h3>Orders</h3>
      <div className={styles.header}>
        <span>Type</span>
        <span>Token</span>
        <span>Ammount</span>
        <span>Price</span>
        <span>Total</span>
        <span>Cancel</span>
      </div>
      {!!orders?.length &&
        orders.map((order) => {
          return (
            <div className={styles.order} key={order.id}>
              <p>{order.side}</p>
              <p>{order.token}</p>
              <p>{order.ammount}</p>
              <p>${order.price}</p>
              <p>${order.ammount * order.price}</p>
              <p
                className={styles.button}
                onClick={() => deleteOrder(order.id)}
              >
                Cancel
                <TiDelete size={16} />
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Orders;
