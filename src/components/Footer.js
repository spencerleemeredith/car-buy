import React from "react";

import { BsLinkedin, BsGithub, BsPersonSquare } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-blue-900 py-16 lg:mt-32 mt-16">
      <div className="container mx-auto h-full w-full flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-white p-2">
              <a href="https://www.linkedin.com/in/spencerleemeredith">
                <BsLinkedin />
              </a>
            </div>
            <div className="rounded-full bg-white p-2">
              <a href="https://github.com/spencerleemeredith">
                <BsGithub />
              </a>
            </div>
            <div className="rounded-full bg-white p-2">
              <a href="https://spencerleemeredith.com">
                <BsPersonSquare />
              </a>
            </div>
          </div>
          <div className="text-white">|</div>
          <div className="text-white font-semibold">SLM</div>
        </div>
        <p className="text-white text-sm">
          Copyright © 2024 Carbuy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
