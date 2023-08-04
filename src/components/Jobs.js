import React from 'react';

const JobCard = ({ position, company, location, annualCTC }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4" mt-5 p-10>
      <h3 className="text-xl font-semibold mb-2">{position}</h3>
      <p className="text-gray-600 mb-2">Company: {company}</p>
      <p className="text-gray-600 mb-2">Location: {location}</p>
      <p className="text-gray-600 mb-2">Annual CTC: {annualCTC}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold mt-4 py-2 px-4 rounded">
        Apply Now
      </button>
    </div>
  );
};

const Jobs = () => {
  const jobs = [
    {
      position: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'Bengaluru, India',
      annualCTC: '₹10,00,000 - ₹12,00,000',
    },
    {
      position: 'Product Manager',
      company: 'InnovateTech Ltd.',
      location: 'Mumbai, India',
      annualCTC: '₹12,00,000 - ₹15,00,000',
    },
    {
      position: 'Data Scientist',
      company: 'DataLab Analytics',
      location: 'Delhi, India',
      annualCTC: '₹7,00,000 - ₹9,00,000',
    },
  ];

  return (
  <>

    <h2 className="text-3xl font-semibold  text-center pt-10 mb-5">Top Jobs in India</h2>
    <p className="  text-center mb-10 "> Discover Exciting Career Opportunities</p>
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4">

      {jobs.map((job, index) => (
        <JobCard
          key={index}
          position={job.position}
          company={job.company}
          location={job.location}
          annualCTC={job.annualCTC}
        />
      ))}
    </div>
    </>
 );
};

export default Jobs;
