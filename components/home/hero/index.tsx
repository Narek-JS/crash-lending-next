import React from "react";
import { Container } from "@/components/ui/container";
import { NavBar } from "./navBar";
import { InformationBar } from "./informationBar";
import { SelectForms } from "./selectForms";
import useWindowSize from "@/hooks/useWindowSize";

import classes from './index.module.css';

const Hero: React.FC<any> = () => {
    const { width } = useWindowSize();

    return (
        <section className={classes.heroSection}>
            <Container>
                {Number(width) > 768 && <NavBar />}
                {Number(width) > 768 && <InformationBar />}
                <SelectForms />
            </Container>
        </section>
    );
};

export { Hero };