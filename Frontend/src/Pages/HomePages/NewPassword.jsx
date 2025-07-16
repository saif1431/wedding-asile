import { useState } from "react";
import { Link } from "react-router-dom";

function NewPassword() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    setShowPopup(true);
  };

  return (
    <div style={{backgroundImage: 'url(/login_signup/login1.jpeg)'}} className="min-h-screen w-full bg-cover bg-top bg-fixed bg-no-repeat">
      <div className="w-full flex items-center lg:items-start md:items-start flex-col md:flex-row lg:px-24 md:px-16 py-20 justify-between px-4">
        <Link to='/' className='lg:w-72 w-56 h-fit'>
          <img
            className="object-cover logo w-fit h-fit"
            src='logo2.png'
            alt="Logo"
          />
        </Link>

        {/* Login form */}
        <div className="w-full max-w-xl rounded-3xl p-2 bg-white">
          <form onSubmit={handleSubmit} className='space-y-6 p-6 lg:px-24 flex flex-col gap-6 w-full'>
            <label className='w-full' htmlFor="newPassword">
              New Password
              <input
                name="newPassword"
                type="password"
                value={formData.newPassword}
                onChange={handleInputChange}
                className='bg-[#F5F3F4] rounded-md p-4 w-full mt-2 border-none outline-none'
                placeholder='Enter new password'
                required
              />
            </label>
            <label className='w-full' htmlFor="confirmPassword">
              Confirm Password
              <input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className='bg-[#F5F3F4] rounded-md p-4 w-full mt-2 border-none outline-none'
                placeholder='Confirm password'
                required
              />
            </label>
            <button
              type="submit"
              className='btn text-xl font-philper py-3 px-5 rounded-full hover:bg-[#ffd586] text-white transition all ease-in duration-200'
            >
              Update
            </button>
          </form>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0  bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Password Updated Successfully!</h2>
              <p className="text-gray-600 mb-6">Your password has been updated successfully.</p>
              <Link
                to="/login"
                className="btn text-xl font-philper py-3 px-8 rounded-full hover:bg-[#ffd586] text-white transition all ease-in duration-200 inline-block"
              >
                Login Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewPassword;