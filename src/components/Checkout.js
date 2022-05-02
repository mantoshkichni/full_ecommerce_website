import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const navigate = useNavigate();
  const notify = () => {
    alert("your order has been placed");
    navigate("/home");
  };

  return (
    <div className="bg-dark text-white">
      <Header />
      <div
        className="container  mt-5 border border-primary rounded"
        style={{ width: "40%" }}
      >
        <form>
          <div className="mt-2">
            <label className="form-label">First Name</label>
          </div>
          <div>
            <input className="form-control" required></input>
          </div>
          <div className="mt-2">
            <label className="form-label" required>
              Last Name
            </label>
          </div>
          <div>
            <input className="form-control"></input>
          </div>
          <div className="mt-2">
            <label className="form-label" required>
              company Name
            </label>
          </div>
          <div>
            <input className="form-control"></input>
          </div>
          <div className="mt-2">
            <label className="form-label" required>
              Country Name
            </label>
          </div>
          <div>
            <input className="form-control"></input>
          </div>
          <div className="mt-2">
            <label className="form-label" required>
              Address 1
            </label>
          </div>
          <div>
            <input className="form-control"></input>
          </div>
          <div className="mt-2">
            <label className="form-label" required>
              Address 2
            </label>
          </div>
          <div>
            <input className="form-control"></input>
          </div>
          <div className="mt-2">
            <label className="form-label" required>
              Town/City
            </label>
          </div>
          <div>
            <input className="form-control"></input>
          </div>
          <div className="mt-2">
            <label className="form-label" required>
              Post Code
            </label>
          </div>
          <div>
            <input className="form-control"></input>
          </div>
          <div className="mt-2">
            <label className="form-label" required>
              Phone
            </label>
          </div>
          <div>
            <input className="form-control"></input>
          </div>
          <div className="mt-2">
            <label className="form-label" required>
              Payment Mode
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Cash on Delivery
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              UPI
            </label>
          </div>
          <div className="mt-2 mb-4 ">
            <button
              onClick={notify}
              type="submit"
              className="btn border border-primary form-control text-white"
            >
              Check out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Checkout;
