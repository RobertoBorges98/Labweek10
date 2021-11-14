import React, { useState } from "react";
import DataFormResult from "./DataFormResult";

export default function DataEntry() {
  const [data, setData] = useState({});

  const submitData = (e) => {
    e.preventDefault();
    setData({
      email: e.target.email.value,
        name: e.target.name.value,
            address: e.target.address.value,
                address2: e.target.address2.value,
                    city: e.target.city.value,
                        province: e.target.province.value,
                            postalCode: e.target.postalCode.value,
    });
  };

  return (
    <div>
      <h1>Data Entry Form</h1>
      <form onSubmit={submitData}>
            <label for="email"><b>E-mail</b></label>
                <input type="text" name="email" />
            <label for="name">Name</label>
                <input type="text" name="name" />
            <label for="address">Address</label>
                <input type="text" name="address" />
            <label for="address2">Address 2</label>
                <input type="text" name="address2" />
            <label for="city">City</label>
                <input type="text" name="city" />
            <label for="province">Province</label>
            <   select name="province" placeholder="Please select a province">

          <option value="" key="" selected disabled>
            Select...
          </option>

          <option value="Alberta" key="">
            Alberta
          </option>

          <option value="British Columbia" key="">
            British Columbia
          </option>

          <option value="Manitoba" key="">
            Manitoba
          </option>

          <option value="New Brunswick" key="">
            New Brunswick
          </option>

          <option value="Newfoundland and Labrador" key="">
            Newfoundland and Labrador
          </option>

          <option value="Nova Scotia" key="">
            Nova Scotia
          </option>

          <option value="Ontario" key="">
            Ontario
          </option>

          <option value="Prince Edward Island" key="">
            Prince Edward Island
          </option>

          <option value="Quebec" key="">
            Quebec
          </option>

          <option value="Saskatchewan" key="">
            Saskatchewan
          </option>

        </select>
        <label for="postalCode">Postal Code</label>
        <input type="text" name="postalCode" />
        <input type="checkbox" name="agree" required />
        <label for="agree">I Agree to Terms and Conditions</label>
        <input type="submit" value="Submit" />
      </form>
      <DataFormResult
        email={data.email}
        name={data.name}
        address={data.address}
        address2={data.address2}
        city={data.city}
        province={data.province}
        postalCode={data.postalCode}
      />
    </div>
  );
}