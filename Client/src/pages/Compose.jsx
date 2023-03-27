import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Compose = () => {
  const [value, setValue] = useState('');

  return (
    <div className = 'compose'>
      <div className="content">
        <input type="text" placeholder = 'title' />
        <div className="editorContainer">
          <ReactQuill className = 'editor' theme = 'snow' value = {value} onChange = {setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b>Draft
          </span>
          <span>
            <b>Visibility: </b>Public
          </span>
          <input style = {{display: 'none'}} type="file" id = 'file' name = '' />
          <label className = 'file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="category">
            <input type="radio" name = 'category' value = 'career' id = 'career' />
            <label htmlFor="career">Career</label>
          </div>
          <div className="category">
            <input type="radio" name = 'category' value = 'family' id = 'family' />
            <label htmlFor="family">Family</label>
          </div>
          <div className="category">
            <input type="radio" name = 'category' value = 'food' id = 'food' />
            <label htmlFor="food">Food</label>
          </div>
          <div className="category">
            <input type="radio" name = 'category' value = 'freeTime' id = 'freeTime' />
            <label htmlFor="freeTime">Free Time</label>
          </div>
          <div className="category">
            <input type="radio" name = 'category' value = 'health' id = 'health' />
            <label htmlFor="health">Health</label>
          </div>
          <div className="category">
            <input type="radio" name = 'category' value = 'music' id = 'music' />
            <label htmlFor="music">Music</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compose