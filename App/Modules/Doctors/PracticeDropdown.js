import React, { useEffect,useState } from "react";
import {Field} from "redux-form";
import {View} from "react-native";
import DoctorsService from "../../Services/BetterDoctor";

const PracticeDropdown = props => {
  const [spec, setSpec] = useState([]);
  useEffect(() => {
    DoctorsService.fetchPractices().then((response)=>{
        // eslint-disable-next-line no-console
        setSpec(response.data);

    });
  }, []);
  return (
    <View>
      <label htmlFor="practice">Practice</label>
      <Field name="practice" component="select">
        <option />

        {
        spec.map((practice, index) => {
            return <option key={practice.uid.toString()} value={practice.uid.toString()}>{practice.name}</option>;

        })}
      </Field>
    </View>
  );
};

export default PracticeDropdown;
