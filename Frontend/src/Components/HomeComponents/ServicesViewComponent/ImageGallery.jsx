import React from 'react'

function ImageGallery() {
  return (
    <div className='mt-6'>
      <p className='text-gray-500 border-b w-fit border-gray-500 p-2'>Gallery</p>

      <div className="mt-4 grid lg:grid-cols-3 grid-cols-2 gap-4">
  {[
    "https://cdn.shaadisouk.com/uploads/ec5bfa9a-3c15-4f4b-a61e-187d4aa4f244SSV01661.JPG",
    "https://cdn.shaadisouk.com/uploads/b0328b36-0aab-44c3-9f02-47d1805bdeb70ca2b557-29a0-42b4-8327-f862c1ae7d089%20(2).jpg",
    "https://cdn.shaadisouk.com/uploads/3619b9e4-b138-4df9-86de-4b54cb52877c45a3d2b3-92bf-43df-a122-cff351817e075%20(3).jpg",
    "https://cdn.shaadisouk.com/uploads/ffa866d9-8980-4b8f-a227-9bfe3dca4ea4a5a714ab-499b-41ac-b495-3a8d1136f97d5%20(2).jpg",
    "https://cdn.shaadisouk.com/uploads/835581eb-6e6a-442f-8771-2dfedd7ab4e0bc4ee056-d395-4269-bcf5-92b373608e958%20(3).jpg",
    "https://cdn.shaadisouk.com/uploads/694a2fb5-9884-4b2f-b3d5-1ef40478d5cfc4dec714-dda7-492f-9a31-7055ea8e7c2a2%20(9).jpg",
    "https://cdn.shaadisouk.com/uploads/4ac89dca-66f5-40ad-9db3-b682f201bb3a0fda829c-f0ae-44e1-8018-a46af5b5a5deSSV04497.jpeg",
    "https://cdn.shaadisouk.com/uploads/e099c211-f189-433c-bded-c434b5b7d8d9158cda2c-0c4a-4839-acb2-96c1018a25a81.jpg",
    "https://cdn.shaadisouk.com/uploads/8a6f8845-7c15-4098-87f1-81b56eb9652cb996f4b6-e9e8-4a82-97a1-1ba73426b1f5jiv_042.jpeg",
    "https://cdn.shaadisouk.com/uploads/56f37a64-0fa6-43c7-8764-77cef6be0c6516b551b7-722a-4008-8d03-3f23baa16c36SSV04953.jpeg"
  ].map((src, index) => (
    <div key={index} className="aspect-square overflow-hidden rounded-lg">
      <img
        src={src}
        alt={`Gallery ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>
    </div>
  )
}

export default ImageGallery
