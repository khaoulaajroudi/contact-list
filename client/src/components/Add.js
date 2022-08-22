import React, { useState } from "react";
import { addcontact } from "../JS/Action/ContactActions";
import { useDispatch } from "react-redux";

function Add() {
  const dispatch = useDispatch();
  const [NewContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  return (
    <div>
      <div class="wrapper">
        <a href="#demo-modal">ADD</a>
      </div>

      <div id="demo-modal" class="modal">
        <div class="modalcontent">
          <h1>ADD NEW CONTACT</h1>

          <input
            placeholder="name"
            onChange={(e) =>
              setNewContact({ ...NewContact, name: e.target.value })
            }
          />
          <input
            placeholder="email"
            onChange={(e) =>
              setNewContact({ ...NewContact, email: e.target.value })
            }
          />
          <input
            placeholder="phone"
            onChange={(e) =>
              setNewContact({ ...NewContact, phone: e.target.value })
            }
          />

          <div class="modalfooter">
            <button onClick={() => dispatch(addcontact(NewContact))}>
              Submit
            </button>
          </div>

          <a href="#" class="modal__close">
            &times;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Add;
