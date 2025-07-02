import Note from "../Models/Note.js"

export async function getAllNotes (req, res) {
    try {
        const notes = await Note.find(); // So we can read the contents of our schema in our GET request. It will pull all the info.
        res.status(200).json(notes); //On successful database pull, we send a success message.
    } catch (error) {
        console.log("Error in getAllNotes controller.", error) // If something goes wrong, we get an indication in the console.
        res.status(500).json({message: "Internal Server Error."}) // If it is an error pulling the database, it is most likely our error, so we return a 500 status code.
    }
};

export async function createNote (req, res) {
    try {
        const {title, content} = req.body;
        const note = new Note({title, content});
           
        const savedNote = await note.save();
        res.status(201).json(savedNote) // On the creation of a new note, instead of showing a basic message like "Note created!", we can show the user the note they just created.

    } catch (error) {
        console.log("Error in createNote controller.", error)
        res.status(500).json({message: "Internal Server Error."})
    }
};

export async function updateNote (req, res) {
    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});
        if (!updatedNote) return res.status(404).json({message: "Note Not Found."})
        res.status(201).json(updatedNote);
    } catch (error) {
        console.error("Error in updateNote controller.")
        res.status(500).json({message: "Internal Server Error."})
    }
};

export async function deleteNote (req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id); 
        if (!deletedNote) return res.status(404).json({message: "Note Not Found."})
        res.status(201).json({message: "Note Deleted Successfully!"})
    } catch (error) {
        console.error("Error in deleteNote controller.")
        res.status(500).json({message: "Internal Server Error."})
    }  
}; 