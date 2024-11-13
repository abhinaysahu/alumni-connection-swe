import Header from "../components/Header";

export default function About(){
  return <>
    <Header name={"About"}></Header>
   <div className="container  mx-auto mt-10 my-auto px-10 flex-grow">
  <div className="flex justify-center">
    <div className="flex-shrink-0">
      <div className="text-center mb-10">
        <p className="text-3xl font-semibold text-blue-700">Who We Are</p>
        <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2>
      </div>
    </div>
  </div>
  <div className="flex justify-center space-x-4 flex-wrap">
    <div className="flex-grow sm:flex-grow-0 sm:w-1/2 lg:w-1/3 xl:w-full">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <p class="text-lg font-semibold mb-4">
          Welcome to AlumConnect – Your Bridge to a Thriving Network of Connections, Opportunities, and Growth!
        </p>

        <p class="mb-6">
          AlumConnect is a dedicated platform built to foster meaningful relationships between alumni and current students of <em>MCA, National Institute of Technology, Karnataka</em>. Our goal is to create a vibrant, supportive network that empowers every member to excel in their personal and professional lives. By connecting past graduates and current students, we aim to build a community where experience meets ambition, and where collaboration fuels success.
        </p>

        <h2 class="text-2xl font-semibold text-blue-600 mb-3">Our Mission</h2>
        <p class="mb-6">
          At AlumConnect, we believe that connections drive opportunity. Our mission is to provide a space for alumni and students to reconnect, mentor, collaborate, and grow together. Whether you’re a seasoned professional looking to give back, a recent graduate navigating your career, or a student seeking guidance, AlumConnect is designed to bring you closer to people who can help you succeed.
        </p>

        <h2 class="text-2xl font-semibold text-blue-600 mb-3">What We Offer</h2>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li><strong>Networking Opportunities:</strong> Search for and connect with others based on location, industry, graduation year, and more.</li>
          <li><strong>Mentorship Program:</strong> Find mentors or become one, sharing valuable insights to help others reach their potential.</li>
          <li><strong>Job Opportunities:</strong> Share or discover job postings from within our community, helping each other advance in our careers.</li>
        </ul>

        <h2 class="text-2xl font-semibold text-blue-600 mb-3">Why Join AlumConnect?</h2>
        <p class="mb-6">
          As a member of AlumConnect, you’re joining a network that goes beyond professional networking. You’re stepping into a community that values lifelong connections, shared experiences, and mutual support. By engaging with others, you’re contributing to a legacy of collaboration and helping to build a stronger future for our alumni and students.
        </p>

        <h2 class="text-2xl font-semibold text-blue-600 mb-3">Join Us</h2>
        <p>
          Whether you’re reconnecting with old friends, seeking guidance, or looking to make new connections, AlumConnect is here to support you. Sign up today and take the first step towards a lifetime of opportunities, friendships, and growth. Together, we are building a community that lasts.
        </p>
      </div>
    </div>
  </div>
</div>

  </>
}