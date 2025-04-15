import React from 'react'
import newsBg from "../../../assets/images/newsBg.svg";
import { useNavigate} from 'react-router-dom'; 

function NewsDetails() {
  return (
    <div className="font-inter">
      <div className="relative font-inter xl:h-[50vh] h-[40vh]">
        <img
          src={newsBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-blue-400/10 to-blue-500/20 -z-10"></div>
      </div>
      
      <div className='mx-auto max-w-screen-xl -mt-20 relative z-10 font-inter 2xl:p-0 lg:p-6 p-6'>
        <div className='flex flex-row xl:p-8 p-4 bg-gray-100 shadow-lg xl:w-3xl border-t-4 border-blue-800'>
          <div className='flex flex-col gap-4'>
            <h3 className='xl:text-lg text-sm font-bold text-blue-700'>TOP NEWS</h3>
            <div className='xl:text-4xl text-xl font-bold xl:leading-11 leading-7'>
              Embedded Silicon Expands Into RF IC Design Services
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with CTA */}
      <div className="max-w-screen-xl mx-auto xl:mt-20 mt-6 2xl:p-0 lg:p-6 p-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className='lg:w-2/3'>
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700 leading-relaxed">
                In a strategic move to foster deeper innovation and collaboration, Embedded Silicon Group has announced its participation in a new consortium of semiconductor and embedded technology companies. The goal: to accelerate the development of custom system-on-chip (SoC) and embedded system solutions for emerging markets including autonomous systems, AI at the edge, and smart industrial automation.
              </p>
            </div>

            {/* Second Image Section */}
            <div className="my-12">
              <img
                src={newsBg}
                alt="Industry Collaboration"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                Industry leaders collaborating on next-generation embedded solutions
              </p>
            </div>

            {/* Quote Section */}
            <div className="bg-blue-50 p-8 rounded-lg my-12">
              <blockquote className="text-xl italic text-gray-700">
                "We're excited to collaborate with industry peers and push the boundaries of what's possible in embedded and custom IC design. This is more than a collaboration—it's an opportunity to shape the next era of electronics together."
              </blockquote>
              <p className="text-right mt-4 font-semibold">- Ayesha Dela Cruz, Director of Strategic Partnerships</p>
            </div>

            {/* Focus Areas */}
            <div className="my-12">
              <h2 className="text-2xl font-bold mb-6">Consortium Focus Areas Include:</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Custom SoC Architectures</h3>
                  <p className="text-gray-600">Enabling domain-specific acceleration for edge AI, automotive safety systems, and robotics.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Embedded Security Solutions</h3>
                  <p className="text-gray-600">Integrating secure boot, encryption engines, and tamper-resistant logic into IC designs.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Open Standards & Interoperability</h3>
                  <p className="text-gray-600">Driving standardization across toolchains, IP blocks, and embedded software components.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Sustainable Design Practices</h3>
                  <p className="text-gray-600">Prioritizing low-power design methodologies and eco-conscious hardware development.</p>
                </div>
              </div>
            </div>

            {/* Third Image Section */}
            <div className="my-12">
              <img
                src={newsBg}
                alt="Innovation in Embedded Systems"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                Pushing the boundaries of embedded systems innovation
              </p>

            </div>
          </div>

          {/* CTA Contact Section */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-24 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                Interested in learning more about our services or want to discuss a project?
              </p>
              <div className="space-y-4">
                <a
                  href="http://www.embeddedsilicongroup.com"
                  className="block w-full text-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Visit Our Website
                </a>
                <a
                  href="mailto:info@embeddedsilicongroup.com"
                  className="block w-full text-center bg-white text-blue-600 py-3 px-6 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Email Us
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold mb-2">Contact Information</h4>
                <p className="text-gray-600">Email: info@embeddedsilicongroup.com</p>
                <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetails
