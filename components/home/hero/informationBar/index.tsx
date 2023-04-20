import React from "react";

import Image from "next/image";
import Dropdown from "@/components/ui/Dropdown";
import { DropdownItems } from "@/models/dropdown";
import { SearchIcon } from "@/public/assets/svges/SearchIcon";

import classes from './index.module.css';
import { informationBarLinks } from "@/constants/options";

const InformationBar: React.FC = () => {

    return (
        <div className={classes.informationBar}>
            <div className={classes.logo}>
                <Image
                    src="/assets/images/logo.png"
                    alt="hero background image"
                    className="dark:invert"
                    priority
                    width={130}
                    height={95}
                />
            </div>
            <div className={classes.menuSelects}>
                { informationBarLinks.map(({ label, items }, index) => (
                    <Dropdown label={label} items={items} key={index}/>
                ))}
            </div>
            <div className={classes.seaech}>
                <SearchIcon />
            </div>
        </div>
    );
};

export { InformationBar };
