import React from 'react'
import '../index.css'
import { useState } from 'react';
import { Link, Navigate } from 'react-router';
import { ArrowLeftIcon } from 'lucide-react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import api from '../lib/axios';

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => { 

    e.preventDefault(); // Prevents the page from reloading each time we submit the form.
    console.log(title); // We put this here to test for the proper information being passed in.
    console.log(content); 
    
    if (!title.trim() || !content.trim()) {   // Basically, if either the note title or note content is empty, then we send a notification to the user to fill in all fields.
    toast.error("Please fill in all fields");
    return;
  }

   setLoading(true);
  try {
    await api.post("/notes", {    // Sending our title, content to our backend. We also use await in conjunction with async to wait for the axios post request to finish before moving on.
      title,
      content,
    });
    toast.success("Note created successfully");   // If the note is created successfully, we send a success notificiation to the user.
    Navigate("/");
  } catch (error) {
    if (error.response.status === 429) {
      toast.error("You are creating notes too quickly. Please wait a moment and try again.", { duration: 8000, icon: '⏳' });
    }
    else {
      console.log("Error creating note", error); // If the note fails to be created, we log the error to the console with the corresponding message and error code for debugging purposes.
    toast.error("Failed to create note");
    }
    
  } finally {
    setLoading(false);  // After our try/catch block, we set loading to false to re-enable the submit button.
  }
  };

 

 


  return (
    <div className = "min-h-screen bg-base-200">
      <div className = "container mx-auto px-4 py-8">
        <div className = "max-w-2xl mx-auto">
          <Link to = {"/"} className = "btn mb-6">
            <ArrowLeftIcon className = "size-5"/>
            Back to Notes
          </Link>

          <div className='card bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title text-2xl mb-4'>Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className='form-control mb-4'>
                <label className='label'>
                  <span className='label-text'>Title</span>
                </label>
                <input type="text" 
                placeholder='Note Title' 
                className='input input-bordered' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                />
                </div>

                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Content</span>
                  </label>
                  <textarea 
                  placeholder='Write your note here...' 
                  className='textarea textarea-bordered h-24' 
                  value={content} 
                  onChange={(e) => setContent(e.target.value)} 
                  />
                </div>

                <div className="card-actions justify-end">
                  <button type='submit' className='btn btn-primary' disabled={loading}>
                    {loading ? "Creating..." : "Create Note"}
                  </button>
                </div>

              </form>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default CreatePage
