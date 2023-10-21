import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { addPost, setButtonVisibility,setTextVisibility, setImage, setDescription, setSubmitted, setInitialImage, setInitialDescription, setAddVisibility, setPostVisibility, removePost} from '../features/homeSlice'



export default function Post({id, postName, postDescription, postImage} : {id: number, postName: string, postDescription: string, postImage: string}) {
    const dispatch = useAppDispatch();
    const selector = useAppSelector((state) => state.post);
    const selectortwo = useAppSelector((state) => state.post);

    const [edit, setEditted] = useState(false);
    const [idEdit, setIdEdit] = useState(id);
    const [nameEdit, setNameEdit] = useState(postName);
    const [descriptionEdit, setDescriptionEdit] = useState(postDescription);
    const [imageEdit, setImageEdit] = useState(postImage);
    const [prevName, setPrevName] = useState(postName);
    const [prevDescription, setPrevDescription] = useState(postDescription);
    const [prevImage, setPrevImage] = useState(postImage);

    const editSet = () => {
      setEditted(true);
    }
    const editUnSet = () => {
      setEditted(false);
      dispatch(removePost(idEdit));
      dispatch(addPost({id: idEdit, name: nameEdit, description: descriptionEdit, image: imageEdit}))
      setPrevName(nameEdit);
      setPrevDescription(descriptionEdit);
      setPrevImage(imageEdit);
    }
    const handleDelete = () => {
      dispatch(removePost(id))

    }
    const cancel = () => {
      setEditted(false);
      dispatch(removePost(id))
      dispatch(addPost({id: idEdit, name: prevName, description: prevDescription, image: prevImage}))
      setImageEdit(prevImage);
      setDescriptionEdit(prevDescription);
      setNameEdit(prevName);


    }
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
      },
      input: {
        margin: '5px 0',
      },
    };

    return (
      <div>
      {!edit && (
        <div>
          <p className="post-name">ID: {id}</p>
          <p className="post-name">Name: {postName}</p>
          <p className="post-name">Description: {postDescription}</p>
          <p className="post-name">Image: <img src={postImage} alt="" className="image-style" /></p>
          <button type="submit" className="button-style" onClick={editSet}>Edit</button>
          <button type="submit" className="button-style" onClick={handleDelete}>Delete</button>
        </div>
      )}
      {edit && (
        <div>
          <p>Edit Name</p>
          <input
            type="text"
            className="input-style" 
            value={nameEdit}
            onChange={(e) => setNameEdit(e.target.value)}
            placeholder="Edit Name"
          />
          <p>Edit Description</p>
          <input
            type="text"
            className="input-style" 
            value={descriptionEdit}
            onChange={(e) => setDescriptionEdit(e.target.value)}
            placeholder="Edit Description"
          />
          <p>Edit Image</p>
          <input
            type="text"
            className="input-style" 
            value={imageEdit}
            onChange={(e) => setImageEdit(e.target.value)}
            placeholder="Edit Image"
          />
    
          <button type="submit" className="button-style" onClick={editUnSet}>Edit</button>
          <button type="submit" className="button-style" onClick={cancel}>Cancel</button>
        </div>
      )}
    </div>

      );
}
