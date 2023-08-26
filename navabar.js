tate} from 'react'
import logo from './data/Tree-Icon.webp';
import GetData from './GetData';
import GridCards from './GridCards';


export default function NavBar() {

    const [data, setData] = useState(null);
    const [isfetch,setisfetch]=useState(<GridCards/>);
    const userdata = () => {
        const info = fetch("https://reqres.in/api/users?page=1", {
            method: "GET",
          })
            .then((response) => response.json())
            .then((resp) => {
              setData(resp.data);
              console.log(data[0]['avatar']);
            })
            .catch((error) => {
              console.error(error);
            });
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor:'red' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <h1> Lets <img src={logo} height='60px' style={{ marginTop: '10px',backgroundColor:'red' }} /> Grow</h1>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="container justify-content-center" style={{ marginLeft: "25%" }}>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        Link
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="/"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {<button type="button" className="btn btn-primary btn-md my-3" style={{ marginLeft: "43%" }} onClick={userdata}>Fetch</button>}
            
                  </div>
            </nav>
        
        </div>
        
    )
}
