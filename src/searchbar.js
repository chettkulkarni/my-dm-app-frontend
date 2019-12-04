import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const SearchBar = props => {
  return (
    <Form action='/form/'>
      <FormGroup>
        <Label for="title">Custom Keyword Search</Label>
        <Input
          type="form"
          name="form"
          placeholder="search semantic of your tweet here"
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default SearchBar;
