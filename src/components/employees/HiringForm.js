import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee, addEmployeeUser, getAllLocations } from "../ApiManager";

export const HiringForm = () => {
  const [locations, setLocation] = useState([]);
  const [user, setUser] = useState({
    fullName: "",
    email: "",
  });
  const [employee, setEmployee] = useState({
    userId:"",
    locationId: "",
    startDate: "",
    payRate: "",
  });

  const navigate = useNavigate();

  const handleSubmitButtonClick = (event) => {
    event.preventDefault();

    const employeesToSendToEmployeeAPI = {
      userId: parseInt(employee.userId),
      startDate: employee.startDate,
      payRate: parseFloat(employee.payRate),
      locationId: parseInt(employee.locationId),
    };

    const employeesToSendToUserAPI = {
      fullName: user.fullName,
      email: user.email,
      isStaff: true,
    };

    addEmployeeUser(employeesToSendToUserAPI)
      .then((user) => {
        employeesToSendToEmployeeAPI.userId = user.id
    return addEmployee(employeesToSendToEmployeeAPI)
  })
      .then(() => {
        navigate("/staff");
      })
  } 

  useEffect(
    () => {
      getAllLocations()
        .then((locationTypeArray) => {
          setLocation(locationTypeArray);
        });
    },
    [] // When this array is empty, you are observing initial component state
  );

  return (
    <form className="hiringForm">
      <h2 className="hiringForm__title">Kandy Korner Hiring Form</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee Name:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="Full Name"
            value={user.fullName}
            onChange={(evt) => {
              const copy = { ...user };
              copy.fullName = evt.target.value;
              setUser(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee Email:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="Full Name"
            value={user.email}
            onChange={(evt) => {
              const copy = { ...user };
              copy.email = evt.target.value;
              setUser(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <select
            value={employee.locationId}
            onChange={(evt) => {
              const copy = { ...employee };
              copy.locationId = evt.target.value;
              setEmployee(copy);
            }}
          >
            {" "}
            <option value="">Select A Location</option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.address}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            required
            autoFocus
            type="date"
            className="form-control"
            placeholder="Start Date"
            value={employee.startDate}
            onChange={(evt) => {
              const copy = { ...employee };
              copy.startDate = evt.target.value;
              setEmployee(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="payRate">Pay Rate:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="Pay Rate"
            value={employee.payRate}
            onChange={(evt) => {
              const copy = { ...employee };
              copy.payRate = evt.target.value;
              setEmployee(copy);
            }}
          />
        </div>
      </fieldset>

      <button
        onClick={(clickEvent) => handleSubmitButtonClick(clickEvent)}
        className="btn btn-primary"
      >
        Submit Form
      </button>
    </form>
  );
};
