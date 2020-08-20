import React, {useEffect, useState} from "react";
import {Field} from "redux-form";
import {View} from "react-native";
import DoctorsService from "../../Services/BetterDoctor";

const InsuranceDropdown = props => {
  const [ins, setIns] = useState([]);
  useEffect(() => {
    DoctorsService.fetchInsurances().then((response)=> {
      // eslint-disable-next-line no-console
      setIns(response.data);
    });
  }, []);
  return (
    <View>
      <label htmlFor="insurance">Insurance</label>
      <Field name="insurance" component="select">
        <option />
        {
        ins.map((insurance, index) => {
            return <option key={insurance.uid.toString()} value={insurance.uid.toString()}>{insurance.name}</option>;

        })}
      </Field>
    </View>
  );
};

export default InsuranceDropdown;
