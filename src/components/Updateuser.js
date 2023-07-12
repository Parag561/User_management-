import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUserObj, FunctionUpdateUser } from "../redux/Action";

const Updateuser = () => {

  const [name, namechange] = useState('');
  const [email, emailchange] = useState('');
  const [phone, phonechange] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const userobj = useSelector((state) => state.user.userobj)


  const handlesubmit = (e) => {
    e.preventDefault();
    const userobj = { name, email, phone };
    dispatch(FunctionUpdateUser(userobj, id));
    navigate('/user');
  }

  useEffect(() => {
    dispatch(FetchUserObj(id));
  }, [])

  useEffect(() => {
    if (userobj) {
      namechange(userobj.name);
      emailchange(userobj.email);
      phonechange(userobj.phone);
    }
  }, [userobj])

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
                  <input value={name || ''} onChange={e => namechange(e.target.value)} className="form-control"></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Email</label>
                  <input value={email || ''} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Phone</label>
                  <input value={phone || ''} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: 'left' }}>
            <button className="btn btn-primary" type="submit">Update User</button> |
            <Link className="btn btn-danger" to={'/user'}>Back</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Updateuser;
