import React, {useEffect, useState} from 'react';
import Button from '@app/components/Button';

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
    <div className="bg-primary rounded overflow-hidden relative w-full max-w-xl" key={name}>
      <label
        htmlFor={`${name}-input`}
        className={`text-primary block w-full font-normal left-0 top-0 m-0 cursor-text
                    pt-[18px] px-[12px] pb-0 absolute transition-all ease-linear duration-200
                    ${displayError ? 'text-error' : 'text-primary'}
                    ${placeholderShown ? 'text-[1.2rem] translate-y-0' : 'text-[0.75rem] -translate-y-[14px]'}
        `}
      >
        <span className="text-primary">{name}</span>
        {displayError ? (
          <span role="alert" id={`${name}-error`} className="error-message">
            &nbsp;({errorMessage})
          </span>
        ) : null}
      </label>
      {isTextArea ? (
        <textarea
          // as={isTextArea ? 'textarea' : 'input'}
          // isTextArea={isTextArea}
          id={`${name}-input`}
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
          // displayError={displayError as boolean}
          className={`peer outline-none bg-transparent appearance-none border-0
                      text-primary block text-[1.2rem] mt-[24px] pt-0 px-[12px] pb-[10px] w-full
                      focus-visible:outline-none
                      border-b-2 h-[250px]
                      ${displayError ? 'border-b-error' : 'border-b-secondary'}
          `}
        />
      ) : (
        <input
          // as={isTextArea ? 'textarea' : 'input'}
          // isTextArea={isTextArea}
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
          // displayError={displayError as boolean}
          className={`peer outline-none bg-transparent appearance-none border-0
                      text-primary block text-[1.2rem] mt-[24px] pt-0 px-[12px] pb-[10px] w-full
                      focus-visible:outline-none
                      border-b-2 h-full
                      ${displayError ? 'border-b-error' : 'border-b-secondary'}
          `}
        />
      )}

      <div
        className={`bottom-0 left-0 right-0 content-[''] block my-0 mx-auto
                    absolute transition-all duration-300 border-b-4
                    peer-focus:scale-150 w-full scale-0
          ${displayError ? 'border-b-error' : 'border-b-secondary'}
        `}
      ></div>
    </div>
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
      {wasSubmitted
        ? <div className="flex items-center justify-center text-primary text-lg h-[498px]">Thank you for your submission. I will respond promptly</div>
        : (
          <form
            id={FORM_NAME}
            name={FORM_NAME}
            data-netlify="true"
            className={`flex flex-col gap-4 items-center`}
            onSubmit={handleSubmit}
            netlify-honeypot="input-field"
            // noValidate
          >
            <p className="hidden">
              <label>Don&apos;t fill this out if you&apos;re human:</label>
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <input type="hidden" name="input-field" />
            </p>
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
              <Button className="mb-2 bg-secondary" type="submit">Send</Button>
            </div>
          </form>
        )
      }
    </>
  );
}
