import React from 'react'
import { FaGitlab, FaTwitter, FaTelegram, FaWordpress, FaViber } from 'react-icons/fa';

const SocialmediaIcons = () => {
  return (
    <div className="flex space-x-4">
    <a href="#" target="_blank" rel="noopener noreferrer" className="bg-[#FF9021] p-2 rounded-md text-heading hover:text-slate-100 hover:bg-heading">
      <FaGitlab className="text-2xl" />
      <span className="sr-only">Gitlab</span>
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer" className="bg-[#FF9021] p-2 rounded-md text-heading hover:text-slate-100 hover:bg-heading">
      <FaTwitter className="text-2xl" />
      <span className="sr-only">Twitter</span>
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer" className="bg-[#FF9021] p-2 rounded-md text-heading hover:text-slate-100 hover:bg-heading">
      <FaTelegram className="text-2xl" />
      <span className="sr-only">Telegram</span>
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer" className="bg-[#FF9021] p-2 rounded-md text-heading hover:text-slate-100 hover:bg-heading">
      <FaWordpress className="text-2xl" />
      <span className="sr-only">WordPress</span>
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer" className="bg-[#FF9021] p-2 rounded-md text-heading hover:text-slate-100 hover:bg-heading">
      <FaViber className="text-2xl" />
      <span className="sr-only">Viber</span>
    </a>
  </div>
  )
}

export default SocialmediaIcons