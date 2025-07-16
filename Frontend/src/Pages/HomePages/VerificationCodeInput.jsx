import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function VerificationCodeInput({ length = 6, onComplete, onResend }) {
  const [code, setCode] = useState(new Array(length).fill(""));
  const [isComplete, setIsComplete] = useState(false);
  const inputRefs = useRef([]);

  // Focus first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // Check if code is complete
  useEffect(() => {
    const isCodeComplete = code.every((digit) => digit !== "") && code.length === length;
    setIsComplete(isCodeComplete);

    if (isCodeComplete && onComplete) {
      onComplete(code.join(""));
    }
  }, [code, length, onComplete]);

  const handleChange = (index, value) => {
    // Only allow single digits
    if (value.length > 1) return;

    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (!code[index] && index > 0) {
        // If current input is empty, focus previous input
        inputRefs.current[index - 1]?.focus();
      } else {
        // Clear current input
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").replace(/\D/g, "").slice(0, length);

    if (pastedData.length === length) {
      const newCode = pastedData.split("");
      setCode(newCode);

      // Focus the last input
      inputRefs.current[length - 1]?.focus();
    }
  };

  const handleResend = () => {
    // Clear the code
    setCode(new Array(length).fill(""));
    setIsComplete(false);

    // Focus first input
    inputRefs.current[0]?.focus();

    // Call onResend callback
    if (onResend) {
      onResend();
    }
  };

  const handleVerify = () => {
    if (isComplete) {
      alert(`Verification code: ${code.join("")}`);
    }
  };

  return (
    <div className="  flex items-center justify-center ">
      <div className="w-full p-6  overflow-hidden">
        <div className="     mt-6  text-center">
          <h2 className="text-2xl font-bold font-philper mb-2">Email Verification</h2>
          <p className="text-gray-600 mb-6">Enter the 6-digit code sent to your email address</p>
          
          {/* Code Input Fields */}
          <div className="flex mt-12 justify-center gap-3 mb-6">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className={`
                  w-12 h-12 text-center text-xl font-semibold border-2 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-[#ED6187] focus:btn2
                  transition-colors duration-200
                  ${digit ? "border-blue-500 bg-blue-50" : "border-gray-300"}
                  ${isComplete ? "btn2 bg-green-50" : ""}
                `}
                aria-label={`Digit ${index + 1}`}
              />
            ))}
          </div>

          {/* Status Message */}
          <div className="text-center text-sm text-gray-600 mb-6">
            {isComplete ? (
              <span className="text-[#ED6187] font-medium">✓ Code complete!</span>
            ) : (
              <span>Enter all 6 digits or paste your code</span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 mb-6">
            <button 
              onClick={handleVerify} 
              disabled={!isComplete} 
              className={`w-full py-3 px-4 rounded-md font-medium ${
                isComplete 
                  ? "btn text-white" 
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
             <Link to='/change-password'>Verify Code</Link> 
            </button>

            <div className="text-center">
              <span className="text-sm text-gray-600">{"Didn't receive the code? "}</span>
              <button 
                onClick={handleResend} 
                className="text-sm text-[#ED6187] font-medium hover:text-[#ed61869f] bg-transparent border-none cursor-pointer"
              >
                Resend Code
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}