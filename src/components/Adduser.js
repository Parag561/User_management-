import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../redux/Action";

const Adduser = () => {
  const [name, namechange] = useState('');
  const [email, emailchange] = useState('');
  const [phone, phonechange] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handlesubmit = (e) => {
    e.preventDefault();
    const userobj = { name, email, phone };
    dispatch(FunctionAddUser(userobj));
    navigate('/');
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="card">
          <div className="card-header" style={{ textAlign: 'left' }}>
            <h2>Add User</h2>
          </div>
          <div className="card-body" style={{ textAlign: 'left' }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Name</label>
                  <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Email</label>
                  <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Phone</label>
                  <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: 'left' }}>
            <button className="btn btn-primary" type="submit">Create User</button> |
            <Link className="btn btn-danger" to={'/'}>Back</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Adduser;