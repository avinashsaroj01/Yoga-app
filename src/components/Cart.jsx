import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useMyContext } from "../context/Context";
import Modal from "react-bootstrap/Modal";
import qr from "../assets/images/qrcode.jpg";

const Cart = () => {
  const { cart, setCart } = useMyContext();
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false); // Separate state for QR modal

  const closeModal = () => {
    setShowModal(false);
    setShowQRModal(false);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      setShowModal(true);
    } else {
      setShowQRModal(true);
    }
  };

  useEffect(() => {
    let calculatedTotal = 0;
    cart.forEach((ele) => {
      // Remove "Rs" and convert to number
      const priceValue = parseFloat(ele.price.replace(/[^\d.]/g, ''));
      calculatedTotal += priceValue;
    });
    setTotal(calculatedTotal);
  }, [cart]);

  const handleDelete = (itemToDelete) => {
    // Find index of item to delete
    const itemIndex = cart.findIndex(item => 
      item.cardContainer === itemToDelete.cardContainer && 
      item.header === itemToDelete.header
    );
    
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(itemIndex, 1);
      setCart(updatedCart);
    }
  };

  return (
    <div className="ShoppingCart">
      <h1>Your Shopping Cart</h1>
      <div className="card">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          cart.map((ele) => (
            <div className="item" key={`${ele.cardContainer}-${ele.header}`}>
              <div className="services">
                {ele.cardContainer}
                <br />
                <p>Level: {ele.header}</p>
              </div>
              <div className="price">{ele.price}</div>
              <div
                className="delete"
                onClick={() => handleDelete(ele)}
              >
                <AiFillDelete className="bin" />
              </div>
            </div>
          ))
        )}
        {cart.length > 0 && (
          <h4 className="Total">Total: {total.toFixed(2)} Rs</h4>
        )}
      </div>

      <button
        className="checkout"
        onClick={handleCheckout}
        disabled={cart.length === 0}
        style={{
          backgroundColor: cart.length === 0 ? "#ccc" : "#b48821",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: cart.length === 0 ? "not-allowed" : "pointer",
        }}
      >
        {cart.length === 0 ? "Cart is Empty" : "Checkout"}
      </button>

      {/* Empty Cart Modal */}
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Empty Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your cart is empty. Please add items before checkout.</Modal.Body>
        <Modal.Footer>
          <button
            className="contact-btn"
            onClick={closeModal}
            style={{
              backgroundColor: "#b48821",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            OK
          </button>
        </Modal.Footer>
      </Modal>

      {/* QR Code Modal */}
      <Modal show={showQRModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Scan the QR to pay</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={qr}
            alt="QR Code for Payment"
            style={{
              width: "200px",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            Total Amount: {total.toFixed(2)} Rs
          </p>
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            You will receive a confirmation email after payment.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="model-btn"
            onClick={closeModal}
            style={{
              backgroundColor: "#b48821",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;