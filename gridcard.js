import { React, useState } from 'react'
import logo from './data/user.png';
import NavBar from './NavBar';

export default function GridCards() {

    const [data, setData] = useState(logo);
    const [userinfo, setUserinfo] = useState("Click on button");


    const userdata = () => {
        const info = fetch("https://reqres.in/api/users?page=1", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((resp) => {
                setUserinfo(resp.data);
                setData(resp.data[4]['avatar']);
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div>


            <div className="container my-6">
                <div className="row">
                <div className="col-md-3">
                        <div className="card">
                            <img src={userinfo[0]['avatar']} className="card-img-top" alt="User 1" />
                            <div className="card-body">
                                <h5 className="card-title">{userinfo[0]['id']}. {userinfo[0]['first_name']} {userinfo[0]['last_name']}</h5>
                                <p className="card-text">{userinfo[0]['email']}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={userinfo[1]['avatar']} className="card-img-top" alt="User 1" />
                            <div className="card-body">
                                <h5 className="card-title">{userinfo[1]['id']}. {userinfo[1]['first_name']} {userinfo[1]['last_name']}</h5>
                                <p className="card-text">{userinfo[1]['email']}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={userinfo[2]['avatar']} className="card-img-top" alt="User 1" />
                            <div className="card-body">
                                <h5 className="card-title">{userinfo[2]['id']}. {userinfo[2]['first_name']} {userinfo[2]['last_name']}</h5>
                                <p className="card-text">{userinfo[2]['email']}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={userinfo[3]['avatar']} className="card-img-top" alt="User 1" />
                            <div className="card-body">
                                <h5 className="card-title">{userinfo[3]['id']}. {userinfo[3]['first_name']} {userinfo[3]['last_name']}</h5>
                                <p className="card-text">{userinfo[3]['email']}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={userinfo[4]['avatar']} className="card-img-top" alt="User 1" />
                            <div className="card-body">
                                <h5 className="card-title">{userinfo[4]['id']}. {userinfo[4]['first_name']} {userinfo[4]['last_name']}</h5>
                                <p className="card-text">{userinfo[4]['email']}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <img src={userinfo[5]['avatar']} className="card-img-top" alt="User 1" />
                            <div className="card-body">
                                <h5 className="card-title">{userinfo[5]['id']}. {userinfo[5]['first_name']} {userinfo[5]['last_name']}</h5>
                                <p className="card-text">{userinfo[5]['email']}</p>
                            </div>
                        </div>
                    </div>

                </div>
                {<button type="button" className="btn btn-primary btn-md my-3" style={{ marginLeft: "43%" }} onClick={userdata}>Fetch</button>}
            </div>
        
        </div>
    )
}
