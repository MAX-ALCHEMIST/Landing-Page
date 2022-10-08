import "./App.css";
import nothing from "./nothing.png";

function App() {
  return (
    <>
      <div class="grid grid-cols-2 divide-x">
        <div>
          <div className="bg-black">
            <p className=" text-white bg-black font-mono text-7xl">
              Admin view
            </p>
            <p className="text-black bg-black my-20">
              Generating random paragraphs can be an excellent way for writers
              to get their creative flow going at the beginning of the day. The
              writer has no idea what topic the random paragraph will be about
              when it appears. This forces the writer to use creativity to
              complete one of three common writing challenges. The writer can
              use the paragraph as the first one of a short story and build upon
              it. A second option is to use the random paragraph somewhere in a
              short story they create. The third option is to have the random
              paragraph be the ending paragraph in a short story. No matter
              which of these Generating random paragraphs can be an excellent
              way for writers to get their creative flow going at the beginning
              be the ending paragraph in a short story. No matter which of these
              Generating random paragraphs can be ang
            </p>
            <div class="bg-black">
              <img class="object-scale-down h-48 w-96" src={nothing} />
            </div>

            <div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
              <a href="">
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                  Admin
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-green-500">
          <p className=" text-white bg-green-500 font-mono text-7xl">
            Employee's view
          </p>
          <p className="text-white bg-green-500 my-20">
            Generating random paragraphs can be an excellent way for writers to
            get their creative flow going at the beginning of the day. The
            writer has no idea what topic the random paragraph will be about
            when it appears. This forces the writer to use creativity to
            complete one of three common writing challenges. The writer can use
            the paragraph as the first one of a short story and build upon it. A
            second option is to use the random paragraph somewhere in a short
            story they create. The third option is to have the random paragraph
            be the ending paragraph in a short story. No matter which of these
            Generating random paragraphs can be an excellent way for writers to
            get their creative flow going at the beginning be the ending
            paragraph in a short story. No matter which of these Generating
            random paragraphs can be an
          </p>
          <div class="bg-green-500">
            <img class="object-scale-down h-48 w-96" src={nothing} />
          </div>
          <div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
            <a href="https://forms.gle/741DLjmi8Ukmtfr87">
              <button class="bg-black hover:bg-trueGray-900 text-white font-bold py-2 px-4 rounded-full">
                Employee
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
