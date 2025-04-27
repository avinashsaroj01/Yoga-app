import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { cardsData, serviceData } from "../database/services/data";
import { useMyContext } from "../context/Context.jsx";
import Modal from 'react-bootstrap/Modal';

function Services() {
  const navigate = useNavigate();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { cart, setCart } = useMyContext();
  const [tab, setTab] = useState(0);

  const closeModal = () => {
    setShowConfirmationModal(false);
    setShowModal(false);
  };

  const viewBookings = () => {
    closeModal();
    navigate('/cart');
  };

  function addToCart(item) {
    const cardContainer = cart.map((ele) => ele.cardContainer);
    if (cart.some(cartItem => JSON.stringify(cartItem) === JSON.stringify(item))) {
      setShowConfirmationModal(true);
    } else if (cardContainer.includes(item.cardContainer)) {
      setShowModal(true);
    } else {
      setCart([...cart, item]);
    }
  }

  const handleTabClick = (index) => {
    setTab(index);
  };

  // Check if a course is already in cart
  const isCourseInCart = (course) => {
    return cart.some(item => JSON.stringify(item) === JSON.stringify(course));
  };

  return (
    <div className="service-container">
      <div className="service-wrapper">
        <div className="header-container">
          <h2>Our Services</h2>
        </div>
        <div className="tab-container">
          <ul className="navigation">
            {serviceData.map((service, index) => (
              <li
                key={index}
                className={tab === index ? "active" : ""}
                onClick={() => handleTabClick(index)}
              >
                <div className="button">
                  <span className="icon">
                    <img
                      src={
                        tab === index
                          ? service.activeIcon
                          : service.inActiveIcon
                      }
                      alt={`${service.title} icon`}
                    />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <section className="service-section">
          <div className="card-content-container">
            <div className="cards-container">
              {cardsData[tab].map((content, index) => (
                <div key={index} className={`card-${content.className}`}>
                  <div className={`${content.cardContainer}`}>
                    <div className={`card-header header-${content.className}`}>
                      <h3>{content.header}</h3>
                    </div>
                    <div className="card-body">
                      {content.price && (
                        <p>
                          <h4>{content.price}</h4>
                        </p>
                      )}
                      <div className={`card-element-hidden-${content.className}`}>
                        <ul className="card-element-container">
                          {content.elements.map((element, elementIndex) => (
                            <li className="card-element" key={elementIndex}>
                              <FaCheckCircle className={`circle-icon-${tab}`} />
                              {element}
                            </li>
                          ))}
                        </ul>
                        {isCourseInCart(content) ? (
                          <Link
                            to="/cart"
                            className={`btn btn-${content.className}`}
                          >
                            View your Bookings
                          </Link>
                        ) : (
                          <Link
                            onClick={() => addToCart(content)}
                            className={`btn btn-${content.className}`}
                          >
                            {content.buttonText}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Confirmation Modal */}
      <Modal show={showConfirmationModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sorry!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have already chosen this service.</Modal.Body>
        <Modal.Footer>
          <button className="contact-btn" onClick={viewBookings}>
            View your Bookings
          </button>
          <button className="contact-btn" onClick={closeModal}>
            OK
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal for choosing a different level */}
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sorry!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have already chosen one level from this service.
        </Modal.Body>
        <Modal.Footer>
          <button className="contact-btn" onClick={viewBookings}>
            View your Bookings
          </button>
          <button className="contact-btn" onClick={closeModal}>
            OK
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Services;