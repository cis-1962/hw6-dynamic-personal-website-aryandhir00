import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { setButtonVisibility, setTextVisibility, setImage, setDescription, setSubmitted, setInitialImage, setInitialDescription, setAddVisibility, setPostVisibility, addPost } from '../features/homeSlice';
import { setPostName, setPostDescription, setPostImage } from '../features/postSlice';
import Post from './post';
import '../styles.css'; 

/* eslint-disable react/prop-types, @typescript-eslint/no-redeclare */
interface Post {
  id: number;
  postName: string;
  postDescription: string;
  image: string;
}

export default function Home() {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.home);
  const selectortwo = useAppSelector((state) => state.post);
  const [lastId, setLastId] = useState(0);

  const postAdd = () => {
    if (selectortwo.postName !== '' && selectortwo.postImage !== '' && selectortwo.postDescription !== '') {
      const newPostId = lastId;
      dispatch(addPost({ id: lastId, name: selectortwo.postName, description: selectortwo.postDescription, image: selectortwo.postImage }));
      setLastId(newPostId + 1);
    }
    dispatch(setPostName(''));
    dispatch(setPostDescription(''));
    dispatch(setPostImage(''));
  }

  const handleButtonClick = () => {
    dispatch(setButtonVisibility(false));
    dispatch(setTextVisibility(true));
    dispatch(setInitialImage(selector.image));
    dispatch(setInitialDescription(selector.description));
  };
  const submit = () => {
    dispatch(setButtonVisibility(true));
    dispatch(setTextVisibility(false));
    dispatch(setSubmitted(true));
  };
  const cancel = () => {
    dispatch(setButtonVisibility(true));
    dispatch(setTextVisibility(false));
    dispatch(setImage(selector.image));
    dispatch(setDescription(selector.initialDescription));
    dispatch(setSubmitted(false));
  };
  const cancelPost = () => {
    dispatch(setAddVisibility(true));
    dispatch(setPostVisibility(false));
    dispatch(setPostName(''));
    dispatch(setPostDescription(''));
    dispatch(setPostImage(''));
  };
  const post = () => {
    dispatch(setAddVisibility(false));
    dispatch(setPostVisibility(true));
  };

  return (
    /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
    <div className="Home">
      <h1 className="me-heading">Hey, this is me!</h1>
      {selector.buttonVisible && (
        <div>
          <h2 className="image-heading">My Image</h2>
          <img src={selector.image} alt="" className="image-style" />
          <h2 className="description-heading">Description</h2>
          <p className="description-style">{selector.description}</p>
          <button type="submit" className="button-style" onClick={handleButtonClick}>Edit</button>
        </div>
      )}
      {selector.textVisible && (
        <div>
          <input type="text" className="input-style" placeholder="Image" onChange={(e) => dispatch(setImage(e.target.value))} />
          <input type="text" className="input-style" placeholder="Description" onChange={(e) => dispatch(setDescription(e.target.value))} />
          <button type="submit" className="button-style" onClick={submit}>Save</button>
          <button type="submit" className="button-style" onClick={cancel}>Cancel</button>
        </div>
      )}
      <h1 className="post-heading">Here are my Posts!</h1>
      {selector.postVisible && (
        <div>
          <input type="text" className="input-style" placeholder="Name" value={selectortwo.postName} onChange={(e) => dispatch(setPostName(e.target.value))} />
          <input type="text" className="input-style" placeholder="Description" value={selectortwo.postDescription} onChange={(e) => dispatch(setPostDescription(e.target.value))} />
          <input type="text" className="input-style" placeholder="Image" value={selectortwo.postImage} onChange={(e) => dispatch(setPostImage(e.target.value))} />
          <button type="submit" className="button-style" onClick={postAdd}>Add</button>
          <button type="submit" className="button-style" onClick={cancelPost}>Cancel</button>
          {/* <Post/> */}
        </div>
      )}
      {selector.addVisible && <button type="submit" className="button-style" onClick={post}>Add post</button>}
      {selector.posts.slice().sort((a, b) => a.id - b.id).map((p, index) => (
        /* eslint-disable react/no-array-index-key */
        <Post id={p.id} postName={p.name} postDescription={p.description} postImage={p.image} key={index} />
      ))}
    </div>
  );
}

