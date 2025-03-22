import React from 'react';
import dot from "../../../assets/images/dotgrid.svg";
import backdropimage2 from "../../../assets/images/backdropimage2.svg";

function CareersPage() {
  const categories = [
    { name: "Design", icon: "📐", jobs: 235 },
    { name: "Analyst", icon: "📊", jobs: 235 },
    { name: "Electrician", icon: "🔧", jobs: 235 },
    { name: "Finance", icon: "💳", jobs: 235 },
  ];

  const featuredJobs = [
    { title: "Digital Design Engineers", icon: "📱", type: "FULL TIME" },
    { title: "Visual Designer", icon: "🎨", type: "FULL TIME" },
    { title: "Data Analyst", icon: "📊", type: "FULL TIME" },
    { title: "Content Writer", icon: "✍️", type: "FULL TIME" },
  ];

    return (
        <div>
      <div className="relative font-inter xl:h-[60vh] h-[30vh]">
        {/* Background Image */}
        <img
          src={backdropimage2}
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
  
        {/* Faded Overlay using Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent -z-10"></div>
  
        {/* Content */}
        <div className="absolute inset-0 max-w-screen-xl mx-auto 2xl:p-0 xl:p-6 p-10">
          <div className="flex flex-col h-full justify-center">
            <div className="text-white text-[30px] lg:text-[60px] 2xl:text-8xl font-semibold leading-10 lg:leading-[4.25rem] 2xl:leading-[7rem] lg:w-1/2 2xl:w-3/4">
              Shape Tomorrow with Your Talents
              <div className="text-white text-lg lg:text-xl 2xl:text-2xl font-normal xl:mt-8 mt-6">
                At Embedded Silicon, we don’t just design—we engineer the future.
                Join a Filipino-owned global leader where innovation meets opportunity.
              </div>
            </div>
          </div>
        </div>

       </div>
       <div className=' max-w-screen-xl mx-auto flex flex-row text-black justify-center items-center mt-20'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <div className='text-4xl font-bold'>Join a Culture of Excellence</div>
                <div className='text-[#4A5565] text-xl'>We invest in people, celebrate achievements, and create endless opportunities for success</div>

            </div>
        </div>

        <div className=' max-w-screen-xl mx-auto flex flex-row text-black mt-20 justify-center '>
          <div className="text-center py-10">
      <h2 className="text-3xl font-bold text-gray-900">
        Explore by <span className="text-blue-600">category</span>
      </h2>
      <div className="mt-6 flex justify-center gap-6 flex-wrap">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border border-blue-500 p-6 rounded-lg w-64 text-center hover:bg-blue-50 transition"
          >
            <div className="text-4xl mb-2">{category.icon}</div>
            <h3 className="text-xl font-semibold text-blue-600">{category.name}</h3>
            <p className="text-gray-600">{category.jobs} Jobs Available</p>
          </div>
        ))}
      </div>
    </div>
        </div>


        <div className=' max-w-screen-xl mx-auto flex flex-col text-black mt-20 justify-center '>
        <h2 className="text-3xl font-bold text-gray-900 mt-12">
        Featured <span className="text-blue-600">Jobs</span>
        <a href="#" className="text-sm text-blue-500 ml-4">Browse All →</a>
      </h2>
      <div className="mt-6 flex justify-center gap-6 flex-wrap">
        {featuredJobs.map((job, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg w-64 text-left hover:bg-blue-50 transition"
          >
            <div className="flex items-center gap-2 text-blue-600">
              <span className="text-2xl">{job.icon}</span>
              <span className="text-sm font-medium">{job.type}</span>
            </div>
            <h3 className="text-lg font-semibold mt-2">{job.title}</h3>
            <p className="text-gray-600 text-sm mt-1">
              Join our team as an Email Marketing Specialist and lead our digital outreach efforts.
            </p>
            <a href="#" className="text-blue-500 text-sm mt-2 inline-block">
              More Details →
            </a>
          </div>
        ))}
      </div>
        </div>
      </div>
    );
  }
  
  
export default CareersPage;
