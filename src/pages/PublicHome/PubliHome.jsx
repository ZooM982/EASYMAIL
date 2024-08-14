/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from "react";
import SelectChoice from "./publicHomeSelect";
import LeftPic from "../../assets/images/florid-email-marketing.gif"
import Logo from "../../assets/images/logo-easymail.jpg"

const TypingText = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, displayedText, speed]);

  return <p>{displayedText}</p>;
};

const PublicHome = () => {
  const text =
    "Bienvenue sur EasyMail ! Votre nouvelle solution de messagerie électronique au Sénégal";
  const typingSpeed = 100;
  return (
    <section>
      <div className="grid">
        <div className="">
          <img src={Logo} alt="" className="mx-auto"/>
        </div>
        <div className="text-center w-[80%] mx-auto ">
            <TypingText text={text} speed={typingSpeed} />
          </div>
        <div className="md:flex grid ">
        <div className="md:w-[50%]">
          <img src={LeftPic} alt="" className="mx-auto my-3 " />
          {/* <p className="w-3/5 text-left mx-auto font-bold my-4 text-[20px] ">
            Bienvenue sur EasyMail ! <br /> EasyMail est votre nouvelle solution de
            messagerie électronique, spécialement conçue pour simplifier la
            communication dans le secteur informel au Sénégal. Que vous soyez un
            entrepreneur, un commerçant, un artisan ou un professionnel
            indépendant, EasyMail vous offre une plateforme intuitive et
            accessible pour gérer vos échanges quotidiens. Avec EasyMail,
            profitez d'une interface simple et conviviale, adaptée à vos besoins
            spécifiques. Notre objectif est de rendre la communication
            électronique facile et efficace, tout en respectant les contraintes
            et réalités du secteur informel. Créez un compte gratuitement,
            connectez-vous en un clic, et découvrez une nouvelle façon de gérer
            vos messages avec fiabilité et rapidité. Parce que chaque message
            compte, nous sommes là pour vous accompagner au quotidien, à tout
            moment. Rejoignez-nous et laissez EasyMail faciliter votre vie
            professionnelle !
          </p> */}
        </div>
        <div className="items-center grid">
          <SelectChoice />
        </div>
        </div>
      </div>
    </section>
  );
};

export default PublicHome;
