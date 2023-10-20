import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { toggleButtonVisibility,setTextVisibility, setImage, setDescription, setSubmitted, setInitialImage, setInitialDescription } from '../features/homeSlice'

export default function Home() {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.home);

  const handleButtonClick = () => {
    dispatch(toggleButtonVisibility(false));
    dispatch(setTextVisibility(true));
    dispatch(setInitialImage(selector.image));
    dispatch(setInitialDescription(selector.description));
  };
  const submit = () => {
    dispatch(toggleButtonVisibility(true));
    dispatch(setTextVisibility(false));
    dispatch(setSubmitted(true));
  };
  const cancel = () => {
    dispatch(toggleButtonVisibility(true));
    dispatch(setTextVisibility(false));
    dispatch(setImage(selector.image));
    dispatch(setDescription(selector.initialDescription));
    dispatch(setSubmitted(false));
  };

  return (
    <div>
      <h1>Hey, this is me!</h1>
      {selector.buttonVisible && (
        <div>
          <p>{selector.image}</p>
          <p>{selector.description}</p>
          <button type="submit" onClick={handleButtonClick}>Edit</button>
        </div>
      )}
      {selector.textVisible && (
        <div>
          <input type="text" placeholder="Image" onChange={(e) => dispatch(setImage(e.target.value))} />
          <input type="text" placeholder="Description" onChange={(e) => dispatch(setDescription(e.target.value))} />
          <button type="submit" onClick={submit}>Save</button>
          <button type="submit" onClick={cancel}>Cancel</button>
        </div>
      )}
    </div>
  );
}


