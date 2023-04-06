import React from 'react';
import { BrandLinkedin, BrandGithub } from 'tabler-icons-react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="dark:text-secondary-50 text-secondary-900 p-2 flex space-x-1 justify-end">
      <div className="flex items-center space-x-1">
        <BrandLinkedin className="dark:text-secondary-50 text-secondary-900 fill-[#2461A6]" />
        <span>Linkedin</span>
      </div>
      <div className="flex items-center space-x-1">
        <BrandGithub className="dark:text-secondary-50 text-secondary-900 dark:fill-secondary-50 fill-secondary-900" />
        <span>Linkedin</span>
      </div>
    </div>
  );
};

export default Footer;
