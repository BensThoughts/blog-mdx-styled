import React, {useEffect, useState} from 'react';
import Button from '@app/components/Button';
import styled from '@emotion/styled';

const FormLabel = styled.label<{
  placeholderShown: boolean,
  displayError: boolean,
}>`
  display: block;
  font-weight: normal;
  left: 0;
  margin: 0;
  padding: 18px 12px 0;
  position: absolute;
  top: 0;
  transition: all linear 200ms;
  width: 100%;
  color: ${({displayError}) => displayError ? 'rgb(var(--color-app-error))' : 'rgb(var(--color-text-primary))'};
  cursor: text;
  font-size: ${({placeholderShown}) => placeholderShown ? '1.2rem' : '0.75rem'};
  transform: ${({placeholderShown}) => placeholderShown ? 'translateY(0px)' : 'translateY(-14px)'}
`;

const FormField = styled.div`
  background-color: rgba(var(--color-app-primary), 0.5);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const FormFieldBar = styled.div<{
  displayError: boolean
}>`
  border-bottom: ${({displayError}) => displayError ? '4px solid rgb(var(--color-app-error))' : '4px solid rgb(var(--color-app-secondary))'};
  bottom: 0;
  left: 0;
  right: 0;
  content: " ";
  display: block;
  margin: 0 auto;
  position: absolute;
  transform: scaleX(0);
  transition: all 250ms;
  width: 1%;
`;


const FormInput = styled.input<{
  displayError: boolean,
  isTextArea: boolean,
}>`
  appearance: none;
  background: transparent;
  border: 0;
  border-bottom: ${({displayError}) => displayError ? '2px solid rgb(var(--color-app-error))' : '2px solid rgb(var(--color-app-secondary))'};
  color: rgb(var(--color-text-primary));
  display: block;
  font-size: 1.2rem;
  margin-top: 24px;
  outline: 0;
  padding: 0 12px 10px 12px;
  width: 100%;
  height: ${({isTextArea}) => isTextArea ? '250px' : '100%'};

  &:focus {
    ~${FormLabel} {
      font-size: 0.75rem;
      transform: translateY(-14px);
    }

    ~${FormFieldBar} {
      border-bottom: ${({displayError}) => displayError ? '4px solid rgb(var(--color-app-error))' : '4px solid rgb(var(--color-app-secondary))'};
      transform: scaleX(150);
    }
  }
`;

const Submission = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(var(--color-text-primary));
  font-size: 1.125rem;
  line-height: 1.75rem;
  height: 498px;
`;

function NetlifyFormInput({
  name,
  type,
  getFieldError,
  wasSubmitted,
}: {
  name: string,
  type: string,
  getFieldError(value: string): string | null,
  wasSubmitted: boolean,
}) {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const [placeholderShown, setPlaceholderShown] = useState(true);
  const errorMessage = getFieldError(value);
  const displayError = (wasSubmitted || touched) && errorMessage;
  const isTextArea = type === 'textarea';

  useEffect(() => {
    if (wasSubmitted) {
      setValue('');
    }
  }, [wasSubmitted]);

  return (
    <FormField key={name}>
      <FormLabel
        htmlFor={`${name}-input`}
        className="text-primary"
        placeholderShown={placeholderShown}
        displayError={displayError as boolean}
      >
        <span className="text-primary">{name}</span>
        {displayError ? (
          <span role="alert" id={`${name}-error`} className="error-message">
            &nbsp;({errorMessage})
          </span>
        ) : null}
      </FormLabel>
      <FormInput
        as={isTextArea ? 'textarea' : 'input'}
        isTextArea={isTextArea}
        id={`${name}-input`}
        type={type}
        name={name}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onFocus={() => setPlaceholderShown(false)}
        onBlur={() => {
          setTouched(true);
          if (value === '') {
            setPlaceholderShown(true);
          }
        }}
        onSubmit={() => setValue('')}
        required
        aria-describedby={displayError ? `${name}-error` : undefined}
        displayError={displayError as boolean}
      />
      <FormFieldBar displayError={displayError as boolean}></FormFieldBar>
    </FormField>
  );
};

type NetlifyFormData = {
  'form-name': string,
  'name': string,
  'email': string,
  'message': string,
}

function encode(data: NetlifyFormData) {
  const keys = Object.keys(data) as Array<keyof typeof data>;
  return keys
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key] as string))
      .join('&');
}

const FORM_NAME = 'bensthoughts.dev-contact';


function getEmailError(value: string | undefined) {
  if (!value) return 'field is required';
  const valueIsLongEnough = value.length >= 5;
  const valueIsShortEnough = value.length <= 40;
  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);

  if (!valueIsLongEnough) {
    return 'value must be at least 5 characters long';
  } else if (!valueIsShortEnough) {
    return 'value must be no longer than 40 characters';
  } else if (!validEmail) {
    return 'value must be a valid email address';
  }
  return null;
}

function getNameError(value: string | undefined) {
  if (!value) return 'field is required';
  const valueIsLongEnough = value.length >= 3;
  const valueIsShortEnough = value.length <= 40;
  const valueHasNumbers = /\d/.test(value);

  if (!valueIsLongEnough) {
    return 'value must be at least 3 characters long';
  } else if (!valueIsShortEnough) {
    return 'value must be no longer than 40 characters';
  } else if (valueHasNumbers) {
    return 'value must not contain numbers';
  }
  return null;
}

function getMessageError(value: string | undefined) {
  if (!value) return 'field is required';
  const valueIsLongEnough = value.length >= 5;
  const valueIsShortEnough = value.length <= 400;

  if (!valueIsLongEnough) {
    return 'value must be at least 5 characters long';
  } else if (!valueIsShortEnough) {
    return 'value must be no longer than 400 characters';
  }
  return null;
}

export default function NetlifyForm() {
  const [wasSubmitted, setWasSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries()) as NetlifyFormData;

    const formIsValid = !getEmailError(fieldValues.email) && !getNameError(fieldValues.name) && !getMessageError(fieldValues.message);

    if (formIsValid) {
      setWasSubmitted(true);
      fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: encode({
          ...fieldValues,
        }),
      });
    }
  }

  return (
    <>
      {wasSubmitted ?
      <Submission>Thank you for your submission. I will respond promptly</Submission> :
      <form
        id={FORM_NAME}
        name={FORM_NAME}
        data-netlify="true"
        className={`flex flex-col gap-4 items-center`}
        onSubmit={handleSubmit}
        // noValidate
      >
        <input type="hidden" name="form-name" value={FORM_NAME} />
        <NetlifyFormInput
          name="name"
          type="text"
          getFieldError={getNameError}
          wasSubmitted={wasSubmitted}
        />
        <NetlifyFormInput
          name="email"
          type="email"
          getFieldError={getEmailError}
          wasSubmitted={wasSubmitted}
        />
        <NetlifyFormInput
          name="message"
          type="textarea"
          getFieldError={getMessageError}
          wasSubmitted={wasSubmitted}
        />
        <div>
          <Button className="bg-secondary mb-2" type="submit">Send</Button>
        </div>
      </form>
      }
    </>
  );
}
