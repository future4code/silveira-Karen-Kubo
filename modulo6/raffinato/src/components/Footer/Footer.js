import React from 'react';
import whatsapp from "../../assets/whatsapp.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import { Image, DivFooter, DivIcons } from './Styled';

export default function Footer() {
    return (
        <DivFooter>
            <h3>Copyright &copy; 2022 Karen Kubo </h3>
            <br />
            <DivIcons>
                <a href="https://www.linkedin.com/in/karen-kubo-22b929196/" target="_blank" rel="noreferrer"><Image src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/karennkubo" target="_blank" rel="noreferrer" ><Image src={github} alt="github" /></a>
                <a href="https://api.whatsapp.com/send?phone=5519994380962" target="_blank" rel="noreferrer"><Image src={whatsapp} alt="whatsapp" /></a>
            </DivIcons>
        </DivFooter>
    )
}
