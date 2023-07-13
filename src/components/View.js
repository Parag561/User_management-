import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FetchUserObj } from "../redux/Action";

const Viewuser = () => {
    
    const dispatch = useDispatch();
    const { id } = useParams();
    const userobj = useSelector((state) => state.user.userobj);

    useEffect(() => {
        dispatch(FetchUserObj(id));
    }, [])


    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <table className='table table-bordered'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <td><strong>Id</strong></td>
                                <td><strong>Name</strong></td>
                                <td><strong>Email</strong></td>
                                <td><strong>Phone</strong></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{userobj._id}</td>
                                <td>{userobj.name}</td>
                                <td>{userobj.email}</td>
                                <td>{userobj.phone}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="card-footer" style={{ textAlign: 'left' }}>
                        <Link className="btn btn-danger" to={'/'}>Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Viewuser;
