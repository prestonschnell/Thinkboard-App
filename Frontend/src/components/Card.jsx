import React from 'react'
import { Link } from 'react-router'
import { formatDate } from '../lib/utils'; // Import the utility function to format dates
import { Pen, PenSquareIcon, Trash2Icon } from 'lucide-react';
import api from '../lib/axios';
import toast from 'react-hot-toast';

const Card = ({note, setNotes}) => {

  const handleDelete = async (e, id) => {
    e.preventDefault(); // When the user clicks the delete button, we prevent the page from loading.
    if (!window.confirm("Are you sure you want to delete this note?")) {
      return;
    } else {
      try {
       await api.delete(`/notes/${id}`)
       setNotes((prev) => prev.filter(note => note._id !== id)) /* Gets rid of our deleted note by updating the state in our Card component immediately. */
       toast.success("Note successfully deleted!")
      } catch (error) {
        toast.error("Error deleting note.")
        console.log(error, `Error deleting note with id: ${id}`)
      }
    }
  }

  return (
        <Link to={`/note/${note._id}`} className='card bg-base-100 text-white px-4 py-4 rounded mt-2 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]'>
              <h2 className='text-xl font-bold text-gray-300'>{note.title}</h2>
              <p className='text-gray-500'>{note.content}</p> {/* These are the card components themselves. */}
                <div className='card-actions justify-between items-center mt-4'>
                  <p className='text-gray-500 text-sm'>Last updated: {formatDate(new Date(note.updatedAt))}</p>
                <div className='flex justify-center gap-2'>
                  <PenSquareIcon className='w-6 h-6 text-[#00FF9D] hover:text-white transition-colors duration-200' />
                  
                  <button className='btn btn-ghost btn-xs text-error' onClick= {(e) => {handleDelete(e, note._id)}}> {/* We call our handle delete function directly.  */}
                  <Trash2Icon className='size-6' />
                  </button>
                
                </div>
                </div>
        </Link>
  )
}

export default Card
