import React, { BaseSyntheticEvent, useReducer, useState } from 'react';
import Button from '@app/components/Button';
import styled from '@emotion/styled';

const FormLabel = styled.label<{
  placeholderShown: boolean
}>`
  display: block;
  font-weight: normal;
  left: 0;
  margin: 0;
  padding: 18px 12px 0;
  position: absolute;
  top: 0;
  transition: all linear 250ms;
  width: 100%;
  color: rgb(var(--color-text-primary));
  cursor: text;
  font-size: ${({placeholderShown}) => placeholderShown ? '1.2rem' : '0.75rem'};
  transform: ${({placeholderShown}) => placeholderShown ? 'translateY(0px)' : 'translateY(-14px)'}
`;

const FormControl = styled.div`
  background-color: rgb(var(--color-app-primary));
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const FormField = styled.div`
    display: block;
    margin-bottom: 16px;
`;

const FormFieldBar = styled.div`
  /* border-bottom: 4px solid rgb(var(--color-app-secondary)); */
  border-bottom: 4px solid rgb(var(--color-app-secondary));
  bottom: 0;
  left: 0;
  right: 0;
  content: " ";
  display: block;
  margin: 0 auto;
  position: absolute;
  transform: scaleX(0);
  transition: all 350ms;
  width: 1%;
`;



const FormInput = styled.input`
  appearance: none;
  background: transparent;
  border: 0;
  border-bottom: 2px solid rgb(var(--color-app-secondary));
  color: rgb(var(--color-text-primary));
  display: block;
  font-size: 1.2rem;
  margin-top: 24px;
  outline: 0;
  padding: 0 12px 10px 12px;
  width: 100%;

  &:focus {
    ~${FormLabel} {
      font-size: 0.75rem;
      transform: translateY(-14px);
    }

    ~${FormFieldBar} {
      border-bottom: 4px solid rgb(var(--color-app-secondary));
      transform: scaleX(150);
    }
  }

`;

const FormTextArea = styled.textarea`
  appearance: none;
  background: transparent;
  border: 0;
  border-bottom: 2px solid rgb(var(--color-app-secondary));
  color: rgb(var(--color-text-primary));
  display: block;
  font-size: 1.2rem;
  margin-top: 24px;
  outline: 0;
  padding: 0 12px 10px 12px;
  width: 100%;
  height: 250px;

  &:focus {
    ~${FormLabel} {
      font-size: 0.75rem;
      transform: translateY(-14px);
    }

    ~${FormFieldBar} {
      border-bottom: 4px solid rgb(var(--color-app-secondary));
      transform: scaleX(150);
    }
  }

`;



type UpdateInputTextAction = {
  type: 'updateText',
  payload: string,
}

type ResetInputTextAction = {
  type: 'resetText',
}

type InputAction = UpdateInputTextAction | ResetInputTextAction;

type InputState = {
  text: string,
  placeholderShown: boolean,
}

const initialInputState = {
  text: '',
  placeholderShown: true,
}

function inputReducer(state: InputState, action: InputAction): InputState {
  switch(action.type) {
    case 'updateText':
      let placeholderShown = true;
      if (action.payload.length > 0) {
        placeholderShown = false;
      }
      return {
        ...state,
        text: action.payload,
        placeholderShown: placeholderShown,
      }
    case 'resetText':
      return initialInputState;
    default:
      return state;
  }
}

type NetlifyFormProps = {

}

export default function NetlifyForm({className, ...rest}: React.FormHTMLAttributes<HTMLFormElement>) {
  const [nameState, nameDispatch] = useReducer(inputReducer, initialInputState);
  const [emailState, emailDispatch] = useReducer(inputReducer, initialInputState);
  const [messageState, messageDispatch] = useReducer(inputReducer, initialInputState);
  
  // function onChangeName(e: React.FormEvent<HTMLInputElement>) {
  //   nameDispatch({type: 'updateText', payload: e.currentTarget.value});
  // }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    nameDispatch({type: 'resetText'});
    emailDispatch({type: 'resetText'});
    messageDispatch({type: 'resetText'});
  }
  
  return (
    <>

    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className={`flex flex-col gap-4 items-center ${className}`}
      onSubmit={handleSubmit}
      {...rest}
    >
      <FormControl>
        <FormInput
          id="name"
          type="text"
          name="name"
          value={nameState.text}
          onChange={(e) => nameDispatch({type: 'updateText', payload: e.currentTarget.value})}
        />
        <FormLabel htmlFor="name" className="text-primary" placeholderShown={nameState.placeholderShown}>
          Name
        </FormLabel>
        <FormFieldBar></FormFieldBar>
      </FormControl>

      <FormControl>
        <FormInput
          id="email"
          type="email"
          name="email"
          value={emailState.text}
          onChange={(e) => emailDispatch({type: 'updateText', payload: e.currentTarget.value})}
        />
        <FormLabel htmlFor="email" className="text-primary" placeholderShown={emailState.placeholderShown}>
          Email
        </FormLabel>
        <FormFieldBar></FormFieldBar>
      </FormControl>

      <FormControl>
        <FormTextArea
          id="message"
          name="message"
          value={messageState.text}
          onChange={(e) => messageDispatch({type: 'updateText', payload: e.currentTarget.value})}
        />
        <FormLabel htmlFor="message" className="text-primary" placeholderShown={messageState.placeholderShown}>
          Message
        </FormLabel>
        <FormFieldBar></FormFieldBar>
      </FormControl>

      <div>
        <Button type="submit" className="mb-2">Send</Button>
      </div>
    </form>
    </>
  );
}