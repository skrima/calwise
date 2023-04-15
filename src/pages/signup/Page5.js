import React from "react";
import { useOutletContext } from "react-router-dom";

function Page5() {
  const { formData, setFormData, styles, setCurrentPage } = useOutletContext();
  setCurrentPage(5);
  return <div>Page5</div>;
}

export default Page5;
