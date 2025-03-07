import React, { useState } from 'react';
import Stepper from './Stepper';



const AccountInfoForm: React.FC<{ onContinue: () => void }> = ({ onContinue }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    zip: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   onContinue && onContinue(formData as unknown as FormData);
  // };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-around p-4">
      <h1 className="text-4xl font-semibold text-center ">Let&apos;s get you more</h1>
      {/* <div>

      </div> */}
      <div className='flex justify-center items-center'>
             <div className="w-full gap-24 flex flex-row-reverse ">


                        {/* --------------- */}

                        <div className="bg-white rounded-lg  px-6 pb-6">
                          <div className="mb-6 ">
                            {/* <div className="flex items-center mb-4">
                              <span className="mr-4">
                                <Image 
                                  src="/tick.svg" 
                                  alt="Completed" 
                                  width={24} 
                                  height={24} 
                                />
                              </span>
                              <span className="text-lg text-gray-600">Personal Information</span>
                            </div> */}
                            
                            <div className="flex flex-col justify-center space-x-4 mb-4">
                              <label className="block text-gray-700 font-normal mb-2">Name</label>
                              <div className='flex flex-row gap-2 '>
                              <div className='w-1/2'>
                                
                                <input
                                  type="text"
                                  name="firstName"
                                  value={formData.firstName}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="First name"
                                />
                              </div>
                              <div className='w-1/2'>
                              
                                <input
                                  type="text"
                                  name="lastName"
                                  value={formData.lastName}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="Last name"
                                />
                              </div>
                              </div>
                              
                            </div>





                            <div className="mb-4">
                              <label className="block text-gray-700 text-sm mb-2">Email</label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your email"
                              />
                            </div>

                            <div className="mb-4 flex flex-col gap-4">
                              <label className="block text-gray-700 ">Address</label>
                              <div>
                                    <input
                                      type="text"
                                      name="addressLine1"
                                      value={formData.addressLine1}
                                      onChange={handleInputChange}
                                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      placeholder="Address line 1"
                                    />
                                    <input
                                      type="text"
                                      name="addressLine2"
                                      value={formData.addressLine2}
                                      onChange={handleInputChange}
                                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      placeholder="Address line 2"
                                    />
                                    <div className="flex flex-col gap-4 space-x-4">
                                      <div >
                                        <input
                                          type="text"
                                          name="city"
                                          value={formData.city}
                                          onChange={handleInputChange}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                          placeholder="City"
                                        />
                                      </div>
                                      <div >
                                        <input
                                          type="text"
                                          name="zip"
                                          value={formData.zip}
                                          onChange={handleInputChange}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                          placeholder="Zip"
                                        />
                                      </div>
                                    </div>
                              </div>
                            
                              
                            </div>




                            <div>
                              <label className="block text-gray-700  mb-2">Phone</label>
                              <div className="flex">
                                <select className="px-3 py-2 border border-r-0 border-gray-300 rounded-l-md bg-gray-100">
                                  <option>🇮🇳 +91</option>
                                  <option>🇺🇸 +1</option>
                                </select>
                                <input
                                  type="tel"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="+1 (555) 000-0000"
                                />
                              </div>
                            </div>



                          </div>

                          <button 
                            onClick={onContinue}
                            className="w-full bg-white border-1 border-black text-black py-3 rounded-md hover:bg-[#4A3AFF] hover:border-[#4A3AFF] hover:text-white transition duration-300"
                          >
                            Continue
                          </button>
                        </div>
                        <Stepper/>

                        {/* ---------- */} 


                    </div>
      </div>
     
      
    </div>
  );
};

export default AccountInfoForm;