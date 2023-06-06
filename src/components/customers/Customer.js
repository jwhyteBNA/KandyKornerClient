import { Link } from "react-router-dom";

export const Customer = ({ id, fullName, email, totalPurchase }) => {
  return <section className="customer">
      <div>
        <Link to={`/customers/${id}`}>Name: {fullName}</Link>
        </div>
      <div>Email: {email}</div>
      <div>Purchases:{totalPurchase} </div>
    </section>
};
