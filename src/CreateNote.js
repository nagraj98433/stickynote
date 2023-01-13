import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './CreateNote.css';
import AddIcon from '@material-ui/icons/Add';


const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: 'Javascript',
    content: 'I will study tomorrow at 9 pm sharp',
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((preData) => {
      return { ...preData, [name]: value }
    })
  }
  const addEvent = () => {
    props.passNote(note);
    // setNote({
    //   title: '',
    //   content: '',
    // })
  }

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <div className="row">
              <div className="col-8">
                <div className="accordion mt-2" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <input className="accordion-button" type="text" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne" placeholder="Title..."
                        value={note.title} onChange={inputEvent} name="title" autoComplete="off" />
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <input className="accordion-button" type="text" placeholder="Take a note..."
                          value={note.content} onChange={inputEvent} name="content" autoComplete="off" />
                        <AddIcon className="clr_white text-info" role="button" onClick={addEvent} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CreateNote;