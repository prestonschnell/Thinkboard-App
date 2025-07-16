import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'
import axios from 'axios';
import toast from 'react-hot-toast'; // IGNORE: This import is not used in the provided code snippet.
import Card from '../components/Card'; // Import the Card component to display notes


const HomePage = () => {
const [isRateLimited, setIsRateLimited] = useState(false); // State to track if the user is rate-limited
const [notes, setNotes] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchNotes = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/notes');
      console.log(res.data);
      setNotes(res.data);
      setIsRateLimited(false); // Reset rate limit state on successful fetch
    } catch (error) {
      if (error.response?.status === 429) {
        setIsRateLimited(true); // Set rate limit state
      } else {
        toast.error('Error fetching notes:');
      } 
    } finally {
        setLoading(false);
      }
}

fetchNotes();
}, [])

  return (
    <div>
      <Navbar/>

      {isRateLimited ? (<RateLimitedUI />) : (null)} {/* // This component will handle the UI when the user is rate-limited. */}
      
      {loading ? (<div className='text-center text-primary py-10'>Loading</div>) : (null)}

      {notes.length > 0 && !isRateLimited ?
      

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
          {notes.map((note) => ( // Map through the notes and display them in a grid layout.
            <Card key={note._id} note={note} /> // Pass the note as a prop to the Card component
          ))}
        </div> : null}
    </div>
  );
};

export default HomePage;
