import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createStream } from '../../actions';
import { connect } from 'react-redux';

class StreamCreate extends React.Component {
  // `textLabel` is destructured from function params
  textInput = ({ input, textLabel, meta }) => (
    <div>
      <label htmlFor="title">{textLabel}</label>
      <input type="text" id="title" autoComplete="off" {...input} />
      {this.displayError(meta)}
    </div>
  );
  textareaInput = ({ input, textareaLabel, meta }) => (
    <div>
      <label htmlFor="desc">{textareaLabel}</label>
      <textarea id="desc" {...input} />
      {this.displayError(meta)}
    </div>
  );

  // Recieves the `errors` object passed by `validateFunc`
  displayError = ({ error, touched }) => {
    if (error && touched) {
      return <div>{error}</div>;
    }
  };

  onFormSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        {/* `textLabel` is passed as a param into this.textInput() */}
        <Field
          name="title"
          component={this.textInput}
          textLabel="Your essay title"
        />
        <Field
          name="description"
          component={this.textareaInput}
          textareaLabel="Description"
        />
        <button disabled={this.props.invalid}>Submit</button>
      </form>
    );
  }
}

// `validateFunc` receives formValues.
// If validate func returns errors, form will not be submitted.
const validateFunc = ({ title, description }) => {
  const errors = {};

  if (!title || !title.trim()) {
    errors.title = 'Title is required';
  }

  if (!description || !(description.length >= 10)) {
    errors.description = 'Description should be at least 10 xters';
  }

  return errors;
};

const form = reduxForm({
  form: 'CreateStreamForm',
  validate: validateFunc
})(StreamCreate);

export default connect(
  null,
  { createStream }
)(form);
