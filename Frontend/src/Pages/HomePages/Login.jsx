import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div style={{backgroundImage: 'url(/login_signup/login1.jpeg)'}} className="min-h-screen w-full bg-cover bg-top bg-fixed bg-no-repeat">
      <div className="w-full flex items-center lg:items-start md:items-start flex-col md:flex-row lg:px-24 md:px-16 py-20 justify-between px-4">
           <Link to='/' className='lg:w-72 w-56   h-fit '>
               <img
               className="object-cover logo w-fit h-fit"
               src='logo2.png'
               alt="Logo"
             />
           </Link>

        {/* Login form */}
        <div className="w-full max-w-xl rounded-3xl p-2 bg-white">
          <div className="border-2 border-[#ED6187] shadow-lg rounded-3xl">
            <h1 className="text-center font-philper text-4xl text-gray-800 lg:mt-16 mt-8 mb-12">Welcome back!</h1>
            <div className="text-center pb-6 pt-8 lg:px-6">
              <h2 className="lg:text-2xl font-philosopher text-2xl font-philper text-gray-800 mb-2">Login</h2>
              <p className="text-sm text-gray-500">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#ED6187] hover:underline">
                  Sign up
                </Link>
              </p>
            </div>

            <div className="space-y-6 lg:px-14 px-4 pb-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email field */}
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-8 py-3 text-lg bg-[#FAF6F2] rounded-full outline-none"
                    required
                  />
                </div>

                {/* Password field */}
                <div className="space-y-2 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="w-full px-8 py-3 text-lg bg-[#FAF6F2] rounded-full outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {/* Forgot password link */}
                <div className="text-right">
                  <Link to="/forget-password" className="text-sm text-[#ED6187] hover:underline">
                    Forgot password?
                  </Link>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full btn text-white font-semibold py-3 rounded-full font-philper lg:text-2xl text-xl transition-colors"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}