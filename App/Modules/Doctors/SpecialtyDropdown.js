import React, { useEffect,useState } from "react";
import {Field} from "redux-form";
import {View} from "react-native";
import DoctorsService from "../../Services/BetterDoctor";

const SpecialtyDropdown = props => {
  const [spec, setSpec] = useState([]);
  useEffect(() => {
    DoctorsService.fetchSpecialties().then((response)=>{
        // eslint-disable-next-line no-console
        setSpec(response.data);

    });
  }, []);
  return (
    <View>
      <label htmlFor="specialty">Specialties</label>
      <Field name="specialty" component="select">
        <option />

        {
        spec.map((specialty, index) => {
            return <option key={specialty.uid.toString()} value={specialty.uid.toString()}>{specialty.name}</option>;

        })}
      </Field>
    </View>
  );
};

export default SpecialtyDropdown;
