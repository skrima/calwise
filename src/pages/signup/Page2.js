import React from "react";
import { useOutletContext } from "react-router-dom";

function Page2() {
  const { formData, setFormData, styles, setCurrentPage } = useOutletContext();
  setCurrentPage(2);
  return <div>Page2</div>;
}

export default Page2;
