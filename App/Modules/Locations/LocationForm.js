import React from "react";
import {Button} from "react-native";

let FindaLocForm = props => {
  return (
    <form >
      <div>
        <label htmlFor="location">Location</label>
        <input name="location" type="text" />
      </div>

      <Button title="Submit" onPress={() => this.props.handleSubmit()}>Submit</Button>

    </form>
  );
};


export default FindaLocForm;
