import { Link } from "react-router-dom";

import { CURRENTLINE, CYAN, ORANGE, PURPLE, RED } from "../../helpers/colors";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className="col-12 col-lg-6">
      <div style={{ backgroundColor: CURRENTLINE }} className="card my-2">
        <div className="card-body">
          <div className="row align-items-center d-flex justify-content-around gap-2">
            <div className="col-sm-4">
              <img
                src={contact.photo}
                alt={contact.fullname}
                style={{ border: `1px solid ${PURPLE}` }}
                className="img-fluid rounded img-w"
              />
            </div>
            <div className="col-sm-6">
              <ul className="list-group pe-0 ">
                <li className="list-group-item list-group-item-dark">
                  نام و نام خانوداگی :{"  "}
                  <span className="fw-bold">{contact.fullname}</span>
                </li>

                <li className="list-group-item list-group-item-dark">
                  شماره موبایل :{"  "}
                  <span className="fw-bold">{contact.mobile}</span>
                </li>

                <li className="list-group-item list-group-item-dark">
                  آدرس ایمیل :{"  "}
                  <span className="fw-bold">{contact.email}</span>
                </li>
              </ul>
            </div>
            <div className="col-sm-1 d-flex flex-sm-column align-items-center justify-content-between gap-2 gap-md-0">
              <Link
                to={`/contacts/${contact.id}`}
                className="btn my-1"
                style={{ backgroundColor: ORANGE }}
              >
                <i className="fa fa-eye" />
              </Link>

              <Link
                to={`/contacts/edit/${contact.id}`}
                className="btn my-1"
                style={{ backgroundColor: CYAN }}
              >
                <i className="fa fa-pen" />
              </Link>
              <button
                onClick={deleteContact}
                className="btn my-1"
                style={{ backgroundColor: RED }}
              >
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
