function App() {
  return (
    <>
    {/* 1. */}
    <div className="text-center mt-10">
        <h1 className="text-3x1 font-bold">My Blog</h1>
      <p className="text-gray-500 mt-2">Learn Coding and tech easily</p>
    </div>

    {/* 2. */}
      {/* 

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">

        <h1 className="text-2xl font-bold">
          Welcome Students
        </h1>

        <p className="text-gray-600 mt-3">
          Learn Tailwind CSS and create
          beautiful websites easily.
        </p>

        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg mt-4">
          Learn More
        </button>

      </div>

    </div> */}
    {/* 3. */}
     <div className="flex justify-center mt-10">

      <div className="bg-white shadow-lg rounded-xl p-6 text-center">

        <h1 className="text-2xl font-bold">
          Premium Plan
        </h1>

        <p className="text-4xl font-bold text-green-600 mt-4">
          ₹499
        </p>

        <p className="text-gray-500 mt-2">
          Per Month
        </p>

        <button className="bg-green-600 text-white px-6 py-2 rounded-lg mt-5">
          Subscribe Now
        </button>

      </div>

    </div>

    {/* 4. */}
      <p className="text-lg italic leading-relaxed text-gray-700">
        "Success is not final, failure is not
        fatal. It is the courage to continue
        that counts."
      </p>
       <p className="font-bold mt-4">
        - Winston Churchill
      </p>

      {/* 5. */}
          <nav className="flex justify-center gap-6 mt-10">

      <a href="#" className="text-blue-600 font-medium">
        Home
      </a>

      <a href="#" className="text-blue-600 font-medium">
        About
      </a>

      <a href="#" className="text-blue-600 font-medium">
        Services
      </a>

      <a href="#" className="text-blue-600 font-medium">
        Contact
      </a>

    </nav>

    {/* 6. */}
      <div className="max-w-sm mx-auto mt-10 p-6 bg-gray-100 rounded-lg">

      <div className="space-y-2">

        <h1 className="text-xl font-bold">
          Dhruv Patel
        </h1>

        <p className="text-blue-600 font-medium">
          Frontend Developer
        </p>

        <p className="text-gray-600">
          I create modern and responsive
          websites using React and Tailwind CSS.
        </p>

      </div>

    </div>

    {/* 7. */}
        <h1 className="text-4xl font-bold">
        Heading 1
      </h1>

      <h2 className="text-3xl font-bold">
        Heading 2
      </h2>

      <h3 className="text-2xl font-semibold">
        Heading 3
      </h3>

      <h4 className="text-xl font-semibold">
        Heading 4
      </h4>

      <h5 className="text-lg font-medium">
        Heading 5
      </h5>

      <h6 className="text-base font-medium">
        Heading 6
      </h6>

      {/* 8. */}

        <h1 className="text-2xl font-bold text-center">
        Subscribe to Newsletter
      </h1>

      <p className="text-gray-500 text-center mt-2 mb-5">
        Get the latest updates in your inbox.
      </p>

      <div className="flex gap-2">

        <input
          type="email"
          placeholder="Enter your email"
          className="border px-4 py-2 rounded-lg w-full"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Subscribe
        </button>

      </div>

      {/* 9. */}
         <div>
        <h2 className="text-xl font-bold mb-3">
          About Technology
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Technology plays an important role in
          our daily life. It helps us communicate,
          learn new things and complete our work
          quickly and easily.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3">
          About Education
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Education helps students gain knowledge,
          develop skills and build a successful
          future. It also improves confidence
          and problem-solving abilities.
        </p>
      </div>

    {/* 10. */}

     <div className="bg-white p-6 rounded-xl shadow-lg">

        <h1 className="text-2xl font-bold">
          Wireless Headphones
        </h1>

        <p className="text-gray-600 mt-3 leading-relaxed">
          Enjoy high-quality sound with
          comfortable wireless headphones.
        </p>

        <h2 className="text-lg font-semibold mt-5">
          Features:
        </h2>

        <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">

          <li>High-quality sound</li>

          <li>Long battery life</li>

          <li>Wireless Bluetooth connection</li>

          <li>Comfortable design</li>

        </ul>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg mt-5">
          Buy Now
        </button>

      </div>

    
    </>
  );
}
export default App
