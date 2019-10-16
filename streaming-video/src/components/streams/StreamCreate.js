import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  // `textLabel` is destructured from function params
  textInput = ({ input, textLabel }) => (
    <div>
      <label htmlFor="title">{textLabel}</label>
      <input type="text" id="title" {...input} />
    </div>
  );
  textareaInput = ({ input, textareaLabel }) => (
    <div>
      <label htmlFor="desc">{textareaLabel}</label>
      <textarea id="desc" {...input} />
    </div>
  );

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default reduxForm({
  form: 'CreateStreamForm'
})(StreamCreate);
