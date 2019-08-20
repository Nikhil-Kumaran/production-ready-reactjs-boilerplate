import React, { Suspense } from "react";

export default function LazyComponent(Component) {
    return props => (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );
}