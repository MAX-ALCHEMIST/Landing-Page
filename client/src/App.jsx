import "./App.css";
import { Button } from "@material-tailwind/react";

function App() {
  return (
    <div class="grid grid-cols-2 divide-x">
      <div>
        <div className="bg-black">
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
        <div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
          <a href="https://forms.gle/741DLjmi8Ukmtfr87">
            <button class="bg-black hover:bg-trueGray-900 text-white font-bold py-2 px-4 rounded-full">
              Employee
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default App;
