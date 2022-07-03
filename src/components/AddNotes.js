import  { useState } from 'react';

const AddNotes = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const ch = 200;

    const handleChange = (event) => {
        if(ch - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
        
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    }
    return (
        <div className="notes new">
            <textarea row='8' cols='10' placeholder="Type to enter text" onChange={handleChange} value={noteText}></textarea>
            <div className="note-footer">
                <small>{ch - noteText.length} characters</small>
                <button className="save" onClick = {handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNotes;