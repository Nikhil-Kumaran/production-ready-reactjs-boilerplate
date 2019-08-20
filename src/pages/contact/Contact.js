import React, { lazy, Suspense } from "react";

const Phone = lazy(() => import('./Phone'))

const Contact = () => {
  return (
    <>
      <div>Contact page</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Phone />
      </Suspense>
    </>
  );
};

export default Contact;