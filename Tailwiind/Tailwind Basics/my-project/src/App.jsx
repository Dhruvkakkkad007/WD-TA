function App() {
  return (
    //1.font-size
    <>
      <div>
        <p className="text-sm ">Small text</p>
        <p className="text-base">Base Text</p>
        <p className="text-3xl"> Big heading</p>
      </div>

      {/* 2.Font-wieght */}
      <div>
        <p className="font-thin">very thin</p>
        <p className="font-extrabold">extra bold</p>
        <p className="font-medium">medium</p>
      </div>

      {/* 3. Font-Color */}
      <div>
        <p className="text-red-500">Red Text</p>
        <p className="text-red">Red - this will not give red color</p>
      </div>

      {/* 4.text Alignment */}
      <div>
        <p className="text-left">Left Alignment</p>

        <p className="text-center">Center Alignment</p>

        <p className="text-right">Right Alignment</p>

        <p className="text-justify">
          This is a paragraph with justified text alignment.
        </p>
      </div>

      {/* 5.Line Height – leading-* */}

      <p className="leading-none">
        This is a paragraph with less space between lines.
      </p>

      <p className="leading-relaxed">
        This is a paragraph with comfortable space between lines.
      </p>

      <p className="leading-loose">
        This is a paragraph with more space between lines.
      </p>

      <p className="leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem
        dignissimos, vel fuga maxime, mollitia delectus deleniti voluptatum ex
        perspiciatis modi tempora suscipit excepturi velit porro est sequi
        voluptas nostrum!
      </p>

      <br />
      <br />

      {/* 6.Letter Spacing*/}
      <p className="tracking-tighter">HELLO STUDENTS</p>

      <p className="tracking-normal">HELLO STUDENTS</p>

      <p className="tracking-widest">HELLO STUDENTS</p>

      <br />
      {/* 7. Margin */}
      <div>
        <p className="mb-4">First Paragraph</p>

        <p>Second Paragraph</p>
      </div>

      {/* 8. Padding */}
      <div className="bg-blue-500 p-6">
        <h1 className="text-white">Hello Students</h1>
      </div>
      {/* 9.gap */}
      <div className="flex gap-4">
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </div>


      

    </>
  );
}
export default App;
