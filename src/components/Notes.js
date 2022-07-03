import { MdDeleteForever } from "react-icons/md";

const Notes = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="notes">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever className="delete-icon" size="1.25em" onClick={() => handleDeleteNote(id)} />
      </div>
    </div>
  );
};

export default Notes;
