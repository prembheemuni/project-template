import { useEffect } from "react";
import { getOffers, useGetOffersData } from "../../redux/thunks/offersApiSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

// interface Offer {
//   id: number;
//   name: string;
//   description: string;
//   discount: string;
//   valid_until: string;
//   location: string;
//   category: string;
// }

const Offers = () => {
  const { data } = useGetOffersData();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getOffers());
  }, []);

  return (
    <div>
      <h2 style={{ color: "blue", textDecoration: "underline" }}>Offers</h2>
      <ul>
        {data.length &&
          data.map((offer: any) => (
            <li key={offer.id} style={{ marginBottom: "20px" }}>
              <h3>{offer.name}</h3>
              <p style={{ fontWeight: "bold" }}>
                Description: {offer.description}
              </p>
              <p>Discount: {offer.discount}</p>
              <p>Valid Until: {offer.valid_until}</p>
              <p>Location: {offer.location}</p>
              <p>Category: {offer.category}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Offers;
