import Link from "next/link";
import style from "./style.module.css";
import React from "react";

const Complete: React.FC = () => {
  return (
    <div className={style.complete}>
      <>
        <img src="/images/Group.png" alt="Logo" />
        <h2>Payment Successful</h2>
        <p>Amount Paid:</p>
        <p>Thank you for your order!</p>
        <p>
          Your payment was processed successfully. A confirmation email has been
          sent to your email address.
        </p>
        <img src="/images/Group51.svg" alt="Single Logo" />
      </>
      <>
        <Link href={"/"}>Return to Home Page</Link>
      </>
    </div>
  );
};
export default Complete;
