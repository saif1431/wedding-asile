import { PhotographerProfile } from "./PhotographerProfile";
import { PricingSummary } from "./PricingSummary";
import { WeddingDetailsForm } from "./WeddingDetailsForm";


export default function WeddingBooking() {
  return (
    <div className="min-h-screen w-full py-8 lg:px-24 px-2">
      <div className=" px-4">
        <div className="flex gap-12 lg:flex-row flex-col">
          {/* Left Column - Wedding Details Form */}
          <div className="lg:w-[60%]       w-full  lg:p-6 p-2 ">
            <WeddingDetailsForm />
          </div>

          {/* Right Column - Photographer Profile and Pricing */}
          <div className="bg-white lg:w-[40%]  w-full rounded-lg p-6 shadow-sm space-y-6">
            <PhotographerProfile
              name="AbdulBasit"
              image="https://www.shaadisouk.com/_next/image?url=https%3A%2F%2Fshaadisouk-image-bucket.s3.eu-west-2.amazonaws.com%2Fuploads%2F530b3960-61f3-4eea-a082-1cf2076909d7pexels-ankur-kumar-2067233-3872626.jpg&w=750&q=75"
              date="23 July 2025"
              tagline="Cherish Every Wedding Day Moment"
              verified={true}
            />

            <PricingSummary serviceFee={56.0} photographerFee={2800.0} total={2856.0} />
          </div>
        </div>
      </div>
    </div>
  )
}
