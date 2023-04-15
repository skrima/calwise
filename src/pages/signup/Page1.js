import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Page1() {
  const {
    formData,
    setFormData,
    styles,
    setCurrentPage,
    setErrorMessage,
    setDisabled,
  } = useOutletContext();

  useEffect(() => {
    setDisabled(true);
    if (!formData.firstname) {
      setErrorMessage("Enter your first name.");
    } else if (!formData.email) {
      setErrorMessage("Enter your email address.");
    } else if (!formData.password) {
      setErrorMessage("Enter your password.");
    } else if (!formData.confirmPassword) {
      setErrorMessage("Re-type your password.");
    } else if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
    } else {
      setErrorMessage("");
      setDisabled(false);
    }
  }, [formData]);

  setCurrentPage(1);
  return (
    <>
      <label style={styles.label}>
        First name
        <input
          value={formData.firstname}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, firstname: e.target.value }))
          }
          placeholder="Jane"
          autoFocus
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Last name (Optional)
        <input
          value={formData.lastname}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, lastname: e.target.value }))
          }
          placeholder="Smith"
          style={styles.input}
        />
      </label>
      <label style={{ ...styles.label, ...styles.span2Label }}>
        Email Address
        <input
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="example@example.com"
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Password
        <input
          value={formData.password}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
          placeholder="Choose a secure password"
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Confirm Password
        <input
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              confirmPassword: e.target.value,
            }))
          }
          placeholder="Re-enter your password"
          style={styles.input}
        />
      </label>
    </>
  );
}

export default Page1;
