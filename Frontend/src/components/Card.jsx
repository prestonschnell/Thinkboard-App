import React from 'react'
import { Link } from 'react-router'

const Card = ({note}) => {
  return (
      <div key={note._id} className='bg-secondary p-4 rounded shadow'>
              <h2 className='text-xl font-bold'>{note.title}</h2>
              <p className='text-gray-700'>{note.content}</p> {/* These are the card components themselves. */}
                <div className='card-actions justify-between items-center mt-4'>
                  <p className='text-gray-500 text-sm'>Last updated: {note.updatedAt}</p>
                  <Link
                    to={`/note/${note._id}`}
                    className='bg-secondary text-white px-4 py-2 rounded mt-2 hover:bg-secondary-dark'
                  >
                    Edit
                  </Link>
                </div>
            </div>
  )
}

export default Card
