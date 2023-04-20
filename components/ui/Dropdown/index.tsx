import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { DropdownItems } from '@/models/dropdown';
import { ArrowIcon } from '@/public/assets/svges/ArrowIcon';

import classes from './index.module.css';

interface Iprops {
  label: string;
  items: DropdownItems
};

const Dropdown: React.FC<Iprops> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      };
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    };

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={classes.dropdown} ref={dropdownRef}>
      <button onClick={toggleDropdown} className={classes.dropdownBtn}>
        {label}
        <ArrowIcon {...(isOpen && { rotate: 180 })}/>
      </button>
      {isOpen && (
        <ul className={classes.dropdownMenu}>
          {items.map((item, index) => (
            <li key={index} className={classes.dropdownMenuItem}>
              <Link href={item.link} onClick={toggleDropdown}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
