import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { deletecontact, getcontact } from "./JS/Action/ContactActions";
import Add from "./components/Add";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcontact());
  }, []);
  const contacts = useSelector((state) => state.contactList);
  return (
    <div className="App">
      <Add />
      {contacts ? (
        contacts.map((el) => (
          <div style={{ width: "300px", border: "1px solid black" }}>
            <h1>{el?.name}</h1>
            <h3>{el?.phone}</h3>
            <p>{el?.phone}</p>
            <button onClick={() => dispatch(deletecontact(el._id))}>
              delete
            </button>
          </div>
        ))
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
}

export default App;
