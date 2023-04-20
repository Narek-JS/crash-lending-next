import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowBottmgender } from '@/public/assets/svges/ArrowBottmgender';
import classNames from 'classnames';
import classes from './index.module.css';

interface Iprops {
    items: Array<string>;
    selectedItem: string;
    setSelectedItem: (text: string) => void;
};

const DropdownSelectUI: React.FC<Iprops> = ({ items, selectedItem, setSelectedItem }) => {
    const [isOpen, setIsOpen] = useState<Boolean>(false);
    const [value, setValue] = useState<string>('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setValue('')
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

    const paintedItems = useMemo(() => items.filter(item => item.includes(value)), [value]);

    return (
        <div className={classes.dropdown} ref={dropdownRef}>
            <div className={classes.wrapperDropdownInput}>
                <input
                    onClick={toggleDropdown}
                    onChange={(e) => {
                        setValue(e.target.value)
                        setSelectedItem('')
                    }}
                    className={classes.dropdownInput}
                    value={selectedItem || value}
                    placeholder='Pick up Date'
                />
                <span className={classes.wrapperIcon}>
                    <ArrowBottmgender rotate={isOpen ? 180: 0}/>
                </span>
            </div>
            {Boolean(isOpen && paintedItems.length) && 
                <ul className={classes.dropdownMenu}>
                    {paintedItems.map((text, index) => (
                        <li key={index} className={classes.dropdownMenuItem} onClick={() => {
                            toggleDropdown()
                            setSelectedItem(text)
                        }}>
                            {text}
                        </li>
                    ))}
                </ul>
            }
            { paintedItems.length === 0 && isOpen && (
                <ul className={classes.dropdownMenu}>
                    <li className={classNames(classes.dropdownMenuItem, classes.dropdownMenuNoItem)}>No options</li>
                </ul>
            )}
        </div>
    );
};

export { DropdownSelectUI };