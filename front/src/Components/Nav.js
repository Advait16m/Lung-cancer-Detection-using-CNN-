import logo from "./Asset/lung_logo.svg"
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav class="w-full h-20 bg-white flex flex-row justify-center items-center">
      <div class="flex flex-row justify-center items-center">
        <a href="/" class="flex text-lg font-semibold">
          <img
            src={logo}
            width="60"
            height="60"
            class="p-2"
            alt="Lung Logo"
          />
          <div class="text-2xl mt-3 text-red-600">Lung Cancer</div>
        </a>
      </div>
    </nav>
  )
}

export default Nav;