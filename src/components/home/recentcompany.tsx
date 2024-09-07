import React from "react";

const links = [
  {
    href: "https://u18733853.ct.sendgrid.net/ls/click?upn=u001.MuP0hI9xLKLWcATGBfsmbCshPnPP73zWIgkPbKUeQKnytD5Pmj-2FZkXk0cekbxT6T9HyPS-2F-2Fm5SYYE2lrfboOZdOYL3gdCCw2meoqpZEQTAgo5J4HTcAKn-2B4q2-2FHybAIQFrWC_6u0htt-2BP6wzU2Mzee0JsQPKJRzBqkteyclQfVsx8cqsvNb3l8Y0-2F5SPTUNFlB9WwmREy7l4cSVdb1EMZ5vm0Jx5HI8HxJ51QHav0grUQdjyEmygtsd0zpnv59DK-2BGWUNnuTx68syg9FxXEYhwFkFNihk-2BcT1uBEnv8cvvHnzRlH0AIKMztfm0vilJUXRI7qXUlQebEm4JigC3G9VCbY9jw-3D-3D",
    title: "L&T’s Campus Recruitment Eligibility Criteria",
  },
  {
    href: "https://u18733853.ct.sendgrid.net/ls/click?upn=u001.MuP0hI9xLKLWcATGBfsmbCqKg14pgBKMEt7PccnUz5sOIF9eMrTxTIAx5clvLmPLm195sKJ71a-2BEReP5sMioaeP8dFabNh3SfOAxH9Ixdi7LCgRcKhOqFS0CULcQu7lT2dJxFrchtyfmi8ZDDCZJIEgnEX8G9daTkPEcPhaIH9zWdrHbUQJvhWjgR5ufbPFVmpx9wkcNhjXK1cH-2Bie8iKQ-3D-3DUP7y_6u0htt-2BP6wzU2Mzee0JsQPKJRzBqkteyclQfVsx8cqsvNb3l8Y0-2F5SPTUNFlB9WwBAVvHtp195EupHY1uimYpH-2FPZ4Gr6jTDR5F5YSnR5j8OCout8c0cFRHFT1eUWP48QEf-2FhUrUEqa4btmarFgjSne5Lx3QDZ8bw7yJFWlOPO41jN-2B1oyAf2DYS-2BcwX0NAhGmR4U0ali-2BsckDlXtMb8JQ-3D-3D",
    title: "L&T’s Campus Recruitment Registration Form (Ps. The Registration link will be valid from 9:00 AM on 7th September 2024 to 11:59 PM on 17th September 2024.)",
  },
];

const repeatedLinks = Array.from({ length: 2 }, () => links).flat();

const LinkCarousel: React.FC = () => {
  return (
    <div className="w-5/6 mx-auto bg-white text-black flex items-center shadow-lg rounded-lg px-4 overflow-hidden border py- my-4">
      <div className="flex flex-col items-center justify-start px-2 md:p-4 border-r-2 w-1/2">
        <h2 className="text-sm sm:text-lg md:text-xl uppercase font-semibold text-primary">
          Latest Updates
        </h2>
      </div>
      <div className="flex flex-col justify-end overflow-hidden h-8 md:h-12 ml-2 w-full">
        <div className="flex flex-row gap-5 md:gap-3 whitespace-nowrap animate-slide-right-to-left">
          {repeatedLinks.map((link, index) => (
            <div
              key={index}
              className="h-8 md:h-12 flex flex-col items-center justify-center duration-500 hover:bg-gray-100 rounded-md"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-sm md:text-base hover:text-blue-700 whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {link.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkCarousel;
