import React from 'react'
import { connect } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FetchUserList, Removeuser } from "../redux/Action";

const Userlisting = (props) => {
  useEffect(() => {
    props.loaduser();
  }, []);

  const handledelete = (id) => {
    if (window.confirm('Do you want to remove?')) {
      props.removeuser(id);
      props.loaduser();
    }
  }

  return (
    props.user.loading ? <div><h2>Loading...</h2></div> :
      props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :
        <div>
          <div className="card">
            <div className="card-header">
              <Link to={'/user/add'} className="btn btn-success">Add User [+]</Link>
            </div>
            <div className="card-body">
              <table className='table table-bordered'>
                <thead className='bg-dark text-white'>
                  <tr>
                    <td><strong>Id</strong></td>
                    <td><strong>Name</strong></td>
                  </tr>
                </thead>
                <tbody>
                  {
                    props.user.userlist && props.user.userlist.map((item, index) =>
                      <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.name}</td>

                        <td>
                          <Link to={'/user/edit/' + item.id} className="btn btn-primary">Edit</Link> |
                          <Link to={'/user/view/' + item.id} className="btn btn-primary">View</Link>  |
                          <button onClick={() => { handledelete(item.id) }} className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>

            </div>
          </div>
        </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loaduser: () => dispatch(FetchUserList()),
    removeuser: (id) => dispatch(Removeuser(id))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Userlisting);