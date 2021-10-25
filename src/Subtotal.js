import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>{` ${value}`}</strong>
            </p>
            <small>
              <input type="checkbox" /> This Order Contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix="₹"
      />
    </div>
  );
}

export default Subtotal;
