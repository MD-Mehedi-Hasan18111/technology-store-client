import React, {useState} from "react";
import { Container } from "react-bootstrap";
import "./MakeAdmin.css";
import swal from 'sweetalert';

const MakeAdmin = () => {
    const [userEmail, setUserEmail] = useState("");

    const handleBlur = (e) => {
        setUserEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://infinite-eyrie-71838.herokuapp.com/users/${userEmail}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal("Admin added successfully", "", "success");
                    e.target.reset();
            }
        })
    }

  return (
    <div>
      <Container>
        <div className="admin-form">
          <h2
            className="text-center mb-4 fw-bold mt-3"
            style={{ color: "#3498db" }}
          >
            Make an Admin
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onBlur={handleBlur}
              placeholder="Email"
              required
            />
            <button type="submit" className="adminBtn mt-2">
              Make Admin
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default MakeAdmin;
