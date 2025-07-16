import React from 'react'
import { Link } from 'react-router'
import { formatDate } from '../lib/utils'; // Import the utility function to format dates
import { Pen, PenSquareIcon, Trash2Icon } from 'lucide-react';

const Card = ({note}) => {
  return (
    <div>
        <Link to={`/note/${note._id}`}>
      <div key={note._id} className='card bg-base-100 text-white px-4 py-2 rounded mt-2 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]'>
              <h2 className='text-xl font-bold'>{note.title}</h2>
              <p className='text-gray-700'>{note.content}</p> {/* These are the card components themselves. */}
                <div className='card-actions justify-between items-center mt-4'>
                  <p className='text-gray-500 text-sm'>Last updated: {formatDate(new Date(note.updatedAt))}</p>
                  <div className='flex items-center gap-2'>
                  <PenSquareIcon className='w-6 h-6 text-[#00FF9D] hover:text-white transition-colors duration-200' />
                  <button className='btn btn-ghost btn-xs text-error'>
                    <Trash2Icon className='size-6' />
                  </button>
                  </div>
                </div>
    </div>
        </Link>
    </div>
  )
}

export default Card
