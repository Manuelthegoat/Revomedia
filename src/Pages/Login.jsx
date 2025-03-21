import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Loader from "../Components/Loader/Loader";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://flag-b5wv.onrender.com/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      setLoading(false);
      Cookies.set("authToken", data.token, { expires: 1 / 24 }); // Store token as a cookie
      navigate("/admin");
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <section className="admin-section">
        <div className="admin-container">
          <div className="form-header">
            <h6>Welcome Back</h6>
            <h4>Admin Login</h4>
          </div>
          {error && <p className="error-message">{error}</p>}
          <form className="admin-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter your Username"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <div className="pass">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />

                <i
                  className={`password-toggle-icon eye ${
                    showPassword ? "fa fa-eye-slash" : "fa fa-eye"
                  }`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
            </div>
            <button type="submit" className="submit-button">
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
