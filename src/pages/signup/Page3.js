import React from "react";
import { useOutletContext } from "react-router-dom";

function Page3() {
  const { formData, setFormData, styles, setCurrentPage } = useOutletContext();
  setCurrentPage(3);
  return <div>Page3</div>;
}

export default Page3;
