import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCustomerUsers, updateCustomerProfile } from "../ApiManager";

export const CustomerForm = () => {
  const { customerId } = useParams();
  const [feedback, setFeedback] = useState("");
  const [profile, updateProfile] = useState({
    loyaltyNumber:""
  })

  useEffect(() => {
    if (feedback !== "") {
      // Clear feedback to make entire element disappear after 3 seconds
      setTimeout(() => setFeedback(""), 3000);
    }
  }, [feedback]);

  useEffect(() => {
    getCustomerUsers(customerId)
      .then((data) => {
        const singleProfile = data[0];
        updateProfile(singleProfile);
      });
  }, [customerId]);

  const handleSubmitButtonClick = (event) => {
    event.preventDefault();

    updateCustomerProfile(profile)
      .then(() => {
        setFeedback("Loyalty number successfully updated");
      })
  };
  return (
    <>
    <div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
        {feedback}
    </div>
    <form className="hiringForm">
        <fieldset>
        <div className="form-group">
          <label htmlFor="loyaltyNumber">Loyalty Number:</label>
          <input
            required
            autoFocus
            type="number"
            className="form-control"
            value={profile.loyaltyNumber}
            onChange={(evt) => {
              const copy = { ...profile };
              copy.loyaltyNumber = parseInt(evt.target.value);
              updateProfile(copy);
            }}
          />
        </div>
      </fieldset>

      <button
        onClick={(clickEvent) => handleSubmitButtonClick(clickEvent)}
        className="btn btn-primary"
      >
        Update Loyalty Number
      </button>
    </form>
    </>
  );
};
