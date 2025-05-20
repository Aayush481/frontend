import React, { useState, useEffect } from 'react';
import './home.css';
import AppTour from './AppTour';
import WhyChoose from './WhyChoose';

const typedText = "Reveal Your Hidden Talents with AI Skill Extraction!";

const Home = () => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    let forward = true;
    const interval = setInterval(() => {
      if (forward) {
        setDisplayed(typedText.slice(0, i + 1));
        i++;
        if (i === typedText.length) {
          forward = false;
          setTimeout(() => {

          }, 2000); // pause at end
        }
      } else {
        setDisplayed(typedText.slice(0, i - 1));
        i--;
        if (i === 0) {
          forward = true;
        }
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full flex justify-center bg-blue-950 text-white  main flex-col items-center gap-0 bg-blend-color '>
      <div className="w-[90%] p-6 md:p-12 max-w-7xl flex flex-col md:flex-row md:justify-between items-center container rounded-[10px] mx-auto">
  
  {/* Left part */}
  <div className="md:w-[45%] flex flex-col gap-6 text-start">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
      {displayed}
      <span className="animate-pulse">|</span>
    </h1>
    <p className="text-md md:text-lg text-gray-200 mb-6 text-start">
      Let our intelligent AI scan your resume and spotlight the skills that make you stand out. Instantly discover strengths you didn’t know you had, get personalized insights, and unlock new career opportunities—all with a single upload!
    </p>
    <div className="flex gap-4 justify-start items-center">
      <a href="/signup" className="bg-blue-900 hover:bg-blue-400 text-white font-semibold py-3 px-6 rounded-md transition duration-200 flex items-center">
        Get Started
      </a>
    </div>
  </div>

  {/* Right part */}
  <div className="md:w-[55%] flex justify-center items-center md:mt-0 relative w-full">
    {/* Robot */}
    <img
      src="https://cdn3d.iconscout.com/3d/premium/thumb/robot-research-3d-icon-download-in-png-blend-fbx-gltf-file-formats--device-ai-technology-activity-pack-science-icons-7746770.png"
      alt="AI Illustration"
      className="w-[280px] md:w-[380px] rounded-xl model1 relative z-10"
      onError={(e) => { e.target.style.display = 'none'; }}
    />
    
    {/* Resume (in front) */}
    <img
      src="https://static.vecteezy.com/system/resources/previews/030/774/936/original/3d-cv-resume-icon-png.png"
      alt="Resume Icon"
      className="absolute left-[20%] top-1/2 z-20"
      style={{
        width: '200px',
        transform: 'translate(-50%, -50%) rotate(5deg) scale(1.1)',
      }}
    />
  </div>
</div>




      {/* How to Use the App Section */}
      <AppTour />


      {/* why choose us section */}

      <WhyChoose />




      {/* Client Testimonials Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-900 pb-[12rem]">
        <div className="w-full max-w-7xl flex flex-col items-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center tracking-tight">
            Why Professionals Trust Us
          </h2>
          <p className="text-lg text-gray-100 text-center mb-12 max-w-2xl">
            Our AI-driven resume skill extractor delivers unmatched accuracy, efficiency, and insights, helping professionals optimize their career trajectory.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

            {/* Testimonial Card 1 */}
            <div className="bg-white shadow-md rounded-2xl p-6">
              <p className="text-gray-700 mb-4">
                "The AI-powered skill extraction transformed my resume instantly. It highlighted the key strengths I didn’t even realize I had!"
              </p>
              <div className="flex items-center">
                <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="Client testimonial" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-gray-800 font-semibold">Dr. Emily Carter</p>
                  <p className="text-sm text-gray-500">Data Scientist</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white shadow-md rounded-2xl p-6">
              <p className="text-gray-700 mb-4">
                "The precision and efficiency of this tool helped me tailor my resume for competitive job applications. Game-changer for job seekers!"
              </p>
              <div className="flex items-center">
                <img src="https://img.freepik.com/premium-photo/professional-software-developer-working-with-online-software_1288657-42461.jpg" alt="Client testimonial" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-gray-800 font-semibold">Mr. Richard Lee</p>
                  <p className="text-sm text-gray-500">Senior Software Engineer</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-white shadow-md rounded-2xl p-6">
              <p className="text-gray-700 mb-4">
                "This AI tool accurately extracted and categorized my skills, helping me showcase my expertise better. Highly recommended!"
              </p>
              <div className="flex items-center">
                <img src="https://tse2.mm.bing.net/th?id=OIP.1H4TjeN5dyNQdkXtz-q7IwHaE2&pid=Api&P=0&h=180" alt="Client testimonial" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-gray-800 font-semibold">Ms. Sophia Brown</p>
                  <p className="text-sm text-gray-500">Business Consultant</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Footer Section */}
      <footer className="w-full bg-blue-800 text-gray-300 py-10">
        <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Column 1: Branding & About */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-2">AI Resume Skill Extractor</h3>
            <p className="text-sm text-gray-400">
              Transforming resumes into powerful career insights using AI-driven skill extraction.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Features</a></li>
              <li><a href="#" className="hover:text-blue-400">Testimonials</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-2">Connect With Us</h3>
            <p className="text-sm text-gray-400 mb-4">Stay updated with the latest AI-driven career tools.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-6 text-center text-blue-950 text-sm font-extrabold">
          © {new Date().getFullYear()} AI Resume Skill Extractor. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;