import { useState } from "react";
import { Users, Camera, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [userType, setUserType] = useState("vendor"); // Removed type annotation
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    businessName: "",
    serviceType: "",
    location: "",
    agreeToTerms: false,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { userType, ...formData });
  };

  return (
    <div style={{backgroundImage : 'url(/login_signup/login1.jpeg'}} className="min-h-screen w-full bg-cover bg-top bg-fixed  bg-no-repeat">
      {/* Left side - Wedding image */}
      <div className="w-full flex items-center lg:items-start md:items-start flex-col md:flex-row lg:px-24 md:px-16 py-6 justify-between px-4">
        <Link to="/" className="w-56">
          <img src="/logo2.png" alt="" />
        </Link>
 

      {/* Right side - Registration form */}
      <div className="w-full max-w-xl rounded-3xl p-2  bg-white ">
        <div className=" border-2 border-[#ED6187] shadow-lg  rounded-3xl">
          <div className="text-center pb-6 pt-8 lg:px-6">
            <h2 className="lg:text-4xl font-philosopher text-2xl font-philper text-gray-800 mb-2">Create an account</h2>
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="login" className="text-[#ED6187] hover:underline">
                Log in
              </Link>
            </p>
          </div>

          <div className="space-y-6 lg:px-14 px-4 pb-6">
            {/* User type toggle */}
            <div className="flex gap-12 font-philper lg:text-2xl text-xl">
              <button
                type="button"
                className={`flex-1 rounded-full py-3 flex items-center justify-center ${
                  userType === "couple"
                    ? "bg-primary text-white "
                    : "bg-white  border border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => setUserType("couple")}
              >
                <Users className="w-4 h-4 mr-2" />
                Couple
              </button>
              <button
                type="button"
                className={`flex-1 rounded-full py-3 flex items-center justify-center ${
                  userType === "vendor"
                    ? "bg-primary text-white "
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => setUserType("vendor")}
              >
                <Camera className="w-4 h-4 mr-2" />
                Vendor
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name field */}
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder={userType === "couple" ? "Couple Name" : "Name"}
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-8 py-3 text-lg bg-[#FAF6F2] rounded-full outline-none "
                  required
                />
              </div>

            <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-8 py-3 text-lg bg-[#FAF6F2] rounded-full outline-none "
                  required
                />
              </div>
         
            

              {/* Location field for vendor */}
              {userType === "couple" && (
       <div className="space-y-2">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full px-8 py-3 text-lg bg-[#FAF6F2] rounded-full outline-none "
                  required
                />
              </div>
              )}

              {/* Password field */}
              <div className="space-y-2 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="w-full px-8 py-3 text-lg bg-[#FAF6F2] rounded-full outline-none "
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

              {/* Confirm Password field */}
              <div className="space-y-2 relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className="w-full px-8 py-3 text-lg bg-[#FAF6F2] rounded-full outline-none "
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Terms checkbox - only for vendor */}
              {userType === "vendor" && (
                <div className="flex items-start space-x-2">
                  <input
                    id="vendor-terms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => handleInputChange("agreeToTerms", e.target.checked)}
                    className="mt-1"
                  />
                  <label htmlFor="vendor-terms" className="text-xs text-gray-600 leading-relaxed">
                    Vendor terms of use, please click{" "}
                    <Link href="/vendor-terms" className="text-[#ED6187] hover:underline">
                      here
                    </Link>{" "}
                    to read
                  </label>
                </div>
              )}

              {/* Terms and Privacy Policy */}
              <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                By creating an account, you agree to the{" "}
                <Link href="/terms" className="text-[#ED6187] hover:underline">
                  Terms of use
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-[#ED6187]hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full btn text-white font-semibold py-3 rounded-full font-philper  lg:text-2xl  text-xl transition-colors"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
           </div>
    </div>
  );
}