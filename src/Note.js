import React from "react";
// import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Note = (props) => {
  const deleteNote = () => {
    props.DeleteItem(props.id);
  };

  return (
    <div className="note" key={props.key} id={props.id}>
      <h3 className="mb-3 text-info">{props.title}</h3>
      <h3>{props.content}</h3>
      <DeleteOutlineIcon
        role="button"
        className="pos_right text-info Hover"
        onClick={deleteNote}
      />
    </div>
  );
};

export default Note;
