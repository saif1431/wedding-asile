export function PricingSummary({ serviceFee, photographerFee, total }) {
      return (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose how to pay</h3>
            <p className="text-sm text-gray-600 mb-4">
              Your event is less than a month away—full deposit is required at checkout
            </p>
    
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                <input type="radio" name="payment" value="full" id="pay-full" defaultChecked />
                <div className="flex-1">
                  <label htmlFor="pay-full" className="font-medium text-gray-900 cursor-pointer">
                    PAY IN FULL
                  </label>
                  <p className="text-sm text-gray-600">Pay the total (£{total.toFixed(2)}) today and you're all set</p>
                </div>
              </div>
            </div>
          </div>
    
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">2% Service Fee:</span>
              <span className="font-medium">£{serviceFee.toFixed(2)}</span>
            </div>
    
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Photographer- Full Day:</span>
              <span className="font-medium">£{photographerFee.toFixed(2)}</span>
            </div>
    
            <div className="flex justify-between items-center text-lg font-semibold pt-2 border-t border-gray-200">
              <span className="text-gray-900">Total Amount:</span>
              <span className="text-gray-900">£{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      );
    }