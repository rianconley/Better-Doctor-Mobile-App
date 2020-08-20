import React, {Component} from "react";
import {Text, View, Input, Item} from "react-native";
import {Field, reduxForm} from "redux-form";
import InsuranceDropdown from "./InsuranceDropdown";
import SpecialtyDropdown from "./SpecialtyDropdown";
import PracticeDropdown from "./PracticeDropdown";

class FindaDocForm extends Component {
  constructor (props) {
    super(props);
    // eslint-disable-next-line no-console
  }

  render () {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        {this.props.showName &&
          <View>
            <View>
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" component="input" type="text" />
            </View>
            <View>
              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" component="input" type="text" />
            </View>
          </View>}

          {this.props.showSpecialty && <SpecialtyDropdown />}
        {this.props.showInsurance && <InsuranceDropdown />}
        {this.props.showPractices && <PracticeDropdown />}
        {this.props.showGender &&
          <View>
            <label htmlFor="gender">Gender</label>
            <View>
              <label>
                <Field name="sex" component="input" type="radio" value="male" />
                {" "}
                Male
              </label>
              <label>
                <Field
                  name="sex"
                  component="input"
                  type="radio"
                  value="female"
                />
                {" "}
                Female
              </label>
              <label>
                <Field
                  name="sex"
                  component="input"
                  type="radio"
                  value="other"
                />
                {" "}
                Other
              </label>
            </View>
          </View>}
        {this.props.showLocation &&
          <View>
            <label htmlFor="location">Location</label>
            <Field name="location" component="input" type="text" />
          </View>}
        <button type="submit" >Submit</button>
      </form>
    );
  }
}
FindaDocForm = reduxForm({
  // a unique name for the form
  form: "Docs",
})(FindaDocForm);

export default FindaDocForm;
