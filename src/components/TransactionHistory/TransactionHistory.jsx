import PropTypes from 'prop-types';
import styles from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((e, index) => {
          const action = index % 2 === 0 ? '' : styles.bg_gray;
          return (
              <tr className={action} key={e.id}>
              <td className={action}>{e.type}</td>
              <td className={action}>{e.amount}</td>
              <td className={action}>{e.currency}</td>
              </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array
}

