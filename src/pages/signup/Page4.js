import React from "react";
import { useOutletContext } from "react-router-dom";

function Page4() {
  const { formData, setFormData, styles, setCurrentPage } = useOutletContext();
  setCurrentPage(4);
  return <div>Page4</div>;
}

export default Page4;
