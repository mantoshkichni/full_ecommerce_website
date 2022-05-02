import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-dark text-white">
      <h1 className="display-3 " style={{ marginLeft: "37%" }}>
        Login page
      </h1>
      <div
        className="container border border-primary rounded   "
        style={{ marginTop: "100px", width: "400px" }}
      >
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              required
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              required="true"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <Link
            className="btn mb-3 form-control border border-primary"
            to="/home"
          >
            Submit
          </Link>
        </form>
      </div>
      <div style={{ height: "500px" }}></div>
    </div>
  );
};
export default Login;
