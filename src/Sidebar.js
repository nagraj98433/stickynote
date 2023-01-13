import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './Sidebar.css';
// import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
// import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// import EditIcon from '@material-ui/icons/Edit';
import EditIcon from '@mui/icons-material/Edit';
// import ArchiveIcon from '@material-ui/icons/Archive';
import ArchiveIcon from '@mui/icons-material/Archive';
// import DeleteIcon from '@material-ui/icons/Delete';
import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@material-ui/icons/Add';
import AddIcon from '@mui/icons-material/Add';
import Header from './Header';
import Note from './Note';


const Sidebar = () => {
  const [note, setNote] = useState({
    title: 'Java',
    content: 'I will study tomorrow at 9 pm sharp',
  });
  const [addItem, setAddItem] = useState([]);
  const [searchItem, setsearchItem] = useState([]);

  const sidebar = () => {
    var ele = document.getElementById('collapse_sidebar');
    var hidingEle = document.getElementsByClassName('hide')
    var style = getComputedStyle(ele);
    var appliedcss = style.maxWidth;
    var returnedval = (appliedcss === '165px') ? "50px" : "165px";
    ele.style.maxWidth = returnedval;
    ele.style.transition = '.1s ease';
    var hideSpan = (appliedcss === '165px') ? "none" : "";
    for (var i = 0; i < hidingEle.length; i++) {
      hidingEle[i].style.display = hideSpan;
    }
  }
  const inputEvent = (event) => {
    const { name, value } = event.target
    setNote((preData) => {
      return { ...preData, [name]: value }
    })
    console.log(note)
  }
  console.log(addItem) //getting empty while searching
  const addEvent = () => {
    setAddItem((oldData) => {
      return [...oldData, note]
    })
    // setNote({
    //   title: '',
    //   content: '',
    // })
  }
  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currData, indx) => {
        return indx !== id;
      })
    )
  }
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');

  const SearchTitle = (posts, query) => {
    if (!query) {
      return posts;
    }

    return addItem.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
    });
  };



  return (
    <React.Fragment>
      <Header fun={sidebar} TitleSearch={SearchTitle} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <div className="sidebar" id="collapse_sidebar">
              <div className="row d-flex flex-column text-light">
                <div className="col px-3 my-2 "><WbIncandescentIcon role="button" /><span className="ms-4 hide">Notes</span></div>
                <div className="col px-3 my-2"><NotificationsActiveIcon role="button" /><span className="ms-4 hide">Reminders</span></div>
                <div className="col px-3 my-2"><EditIcon role="button" /><span className="ms-4 hide">Edit labels</span></div>
                <div className="col px-3 my-2"><ArchiveIcon role="button" /><span className="ms-4 hide">Archive</span></div>
                <div className="col px-3 my-2"><DeleteIcon role="button" /><span className="ms-4 hide">Bin</span></div>
              </div>
            </div>
          </div>
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
            <div className="row">
              <div className="col-12 mt-4 d-flex flex-wrap">
                {addItem.map((val, index) => {
                  return (<Note key={index} id={index} title={val.title} content={val.content}
                    DeleteItem={onDelete} />);
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Sidebar;



// const SearchTitle = (value, id) => {
//   setsearchItem((oldData) => {
//     const arr = [...oldData, addItem];

//     arr[0].filter((currData, indx) => {
//       // const [Java, Mava] = currData.title;
//       // console.log(Java)
//     })
//   })
// }

// const SearchTitle = (value, id) => {
//   return (note.title === value) ?
//     setAddItem((oldData =>
//       oldData.filter((currData, indx) => {
//         return currData.title === value;
//         // console.log(currData.title) // getting all the title names
//       }))) : ''
// }











