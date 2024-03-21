import "./App.css";
import { Navbar } from "./Components/Navbar";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { Box } from "@chakra-ui/react";

import { TbTargetArrow } from "react-icons/tb";
import { PiCubeBold } from "react-icons/pi";
import { FaRegNewspaper } from "react-icons/fa6";

function App() {
  const [text] = useTypewriter({
    words: ["Predicting Business Viability for Smart Investment"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 100,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image sources
  const images = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg",
    "photo7.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const repeatedElements = Array.from({ length: 6 }, (_, index) => (
    <Fade cascade direction="up" damping="0.1">
      <Card
        size="xs"
        variant="elevated"
        backgroundColor="#DDD5D0"
        paddingLeft="3"
        paddingBottom="3"
        paddingRight="3"
        width={240}
        borderRadius="10"
      >
        <CardHeader>
          <Heading size="md">Sector-0{index + 1}</Heading>
        </CardHeader>
        <CardBody>
          <Text>
            <UnorderedList spacing="2" listStyleType="numbers" marginTop="2">
              <ListItem fontWeight="600">KPI-01</ListItem>
              <ListItem fontWeight="600">KPI-02</ListItem>
              <ListItem fontWeight="600">KPI-03</ListItem>
              <ListItem fontWeight="600">KPI-04</ListItem>
              <ListItem fontWeight="600">KPI-05</ListItem>
            </UnorderedList>
          </Text>
        </CardBody>
        <CardFooter>
          <Button size="md" marginTop="2">
            View here
          </Button>
        </CardFooter>
      </Card>
    </Fade>
  ));
  return (
    <>
      <Navbar />
      <section className="sec1">
        <div className="slider">
          {/* <button onClick={prevSlide}>Previous</button> */}
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          {/* <button onClick={nextSlide}>Next</button> */}
        </div>
        <div className="project-name">
          <h1 className="project-heading">
            {text}
            <Cursor />
          </h1>
        </div>
      </section>

      <section className="sec2">
        <div className="container margin-bottom">
          <div className="text-container">
            <TbTargetArrow className="about-icons" />
            <div className="about-heading">Objectives</div>
            <div className="about-items">
              <ul className="about-items-ul">
                <li className="about-items-li">
                  What is the impact of investment on business operations?
                </li>
                <li className="about-items-li">
                  What are the key determinants influencing the successful
                  funding of a business?
                </li>
                <li className="about-items-li">
                  What methodologies can be employed to determine the valuation
                  of a business using its funding data?
                </li>
                <li className="about-items-li">
                  What are the primary causes of business failures?
                </li>
              </ul>
            </div>
          </div>

          <div className="text-container">
            <PiCubeBold className="about-icons" />
            <div className="about-heading">Methodology</div>
            <div className="about-items">
              <ul className="about-items-ul">
                <li className="about-items-li">
                  What is the impact of investment on business operations?
                </li>
                <li className="about-items-li">
                  What are the key determinants influencing the successful
                  funding of a business?
                </li>
                <li className="about-items-li">
                  What methodologies can be employed to determine the valuation
                  of a business using its funding data?
                </li>
                <li className="about-items-li">
                  What are the primary causes of business failures?
                </li>
              </ul>
            </div>
          </div>

          <div className="text-container">
            <FaRegNewspaper className="about-icons" />
            <div className="about-heading">Outcomes</div>
            <div className="about-items">
              <ul className="about-items-ul">
                <li className="about-items-li">
                  What is the impact of investment on business operations?
                </li>
                <li className="about-items-li">
                  What are the key determinants influencing the successful
                  funding of a business?
                </li>
                <li className="about-items-li">
                  What methodologies can be employed to determine the valuation
                  of a business using its funding data?
                </li>
                <li className="about-items-li">
                  What are the primary causes of business failures?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec3">
        <div className="container third">
          <div className="text-container3">
            <h1 className="company-name">BIOCON</h1>
            <div className="company-attributes">
              <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">ABOUT</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                    <p className="accordion-content">
                      Headquartered in Denmark, Novo Nordisk is a global leader
                      in diabetes care.
                      <br />
                      Focus: Their primary focus is developing and manufacturing
                      a wide range of diabetes medications, including insulins,
                      GLP-1 receptor agonists, and other related therapies.
                    </p>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">FOUNDER</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}><p className="accordion-content">Kiran Mazumdar Shaw</p></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">FOUNDED YEAR</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}><p className="accordion-content">1978</p></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">FACTORS FOR SUCCESS</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <ul className="accordion-list">
                      <li className="accordion-list-items">Time to Market</li>
                      <li className="accordion-list-items">Strategic Partnerships</li>
                      <li className="accordion-list-items">High Clinical Trials Success Rates</li>
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="text-container3">
            <h1 className="company-name">LANTERN</h1>
            <div className="company-attributes">
              <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">ABOUT</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                    <p className="accordion-content">
                    Lantern, a mental health startup founded in 2013, offered app-based tools for managing stress, anxiety, and other concerns. 
                    </p>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">FOUNDERS</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}><p className="accordion-content">Alenjandro Foung</p></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">FOUNDED YEAR</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}><p className="accordion-content">2013</p></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">FACTORS FOR FAILURE</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <ul className="accordion-list">
                      <li className="accordion-list-items">Product Not Market Fit</li>
                      <li className="accordion-list-items">Scaling Challenges</li>
                      <li className="accordion-list-items">No Strategic Partnerships</li>
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="text-container3">
            <h1 className="company-name">VOLKSWAGEN</h1>
            <div className="company-attributes">
              <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">ABOUT</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                    <p className="accordion-content">
                    Volkswagen aimed to create an affordable “people's car” accessible to the masses. It offered a wide array of clothing, accessories, footwear, and home decor items.
                      <br />
                      Volkswagen introduced models like the Transporter van and the Karmann Ghia coupe. While sales abroad were strong, the car's historical connection to Nazi Germany initially hindered success in the United States.
                    </p>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">FOUNDER</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}><p className="accordion-content">Established by the German Labour Front with involvement Ferdinand Porsche</p></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">FOUNDED YEAR</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}><p className="accordion-content">1937</p></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">FACTORS FOR SUCCESS</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <ul className="accordion-list">
                      <li className="accordion-list-items">Effective Advertising</li>
                      <li className="accordion-list-items">Strategic Adaptation</li>
                      <li className="accordion-list-items">Iconic Beetle</li>
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="text-container3">
            <h1 className="company-name">LE.COM</h1>
            <div className="company-attributes">
              <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">ABOUT</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                    <p className="accordion-content">
                    This is the story of a company that grew very fast. Chinese tech company LeEco, had thought of building a company that would become a global leader in electric cars, digital streaming, and smart devices.
                      <br />
                      Simply tracing LeEco's cash flow is a Herculean task, since its financial activity is obscured by a dizzying organizational structure comprising a publicly listed holdings company, privately owned organization and dozens of subsidiaries.
                    </p>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">FOUNDER</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}><p className="accordion-content">Jia Yueting</p></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">FOUNDED YEAR</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}><p className="accordion-content">2004</p></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">FACTORS FOR FAILURE</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <ul className="accordion-list">
                      <li className="accordion-list-items">Financial Strain</li>
                      <li className="accordion-list-items">Governance Challenges</li>
                      <li className="accordion-list-items">Diverse Ventures</li>
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="text-container3">
            <h1 className="company-name">BLACKROCK</h1>
            <div className="company-attributes">
              <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">ABOUT</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                    <p className="accordion-content">
                    BlackRock, Inc. is an American multinational investment company based in New York City. Initially as an enterprise risk management and fixed income institutional asset manager.
                      <br />
                      BlackRock is the world's largest asset manager, with US$9.42 trillion in assets under management.
                    </p>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">FOUNDER</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}><p className="accordion-content">Larry Fink, Robert S. Kapito, Susan Wagner</p></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">FOUNDED YEAR</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}><p className="accordion-content">1988</p></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">FACTORS FOR SUCCESS</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <ul className="accordion-list">
                      <li className="accordion-list-items">Global Presence</li>
                      <li className="accordion-list-items">Adaptation To Market Trends</li>
                      <li className="accordion-list-items">Commitment To Sustainability</li>
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="text-container3">
            <h1 className="company-name">AIG</h1>
            <div className="company-attributes">
              <Accordion allowToggle >
                <AccordionItem>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">ABOUT</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}>
                    <p className="accordion-content">
                    American International Group, Inc. (AIG) is a large multinational insurance corporation headquartered in New York City. Originally named American Asiatic Underwriters, the company began as an insurance agency. It later expanded its operations globally.
                      <br />
                      AIG gained prominence, and later infamy, for its Financial Products division, which engaged in the creation and sale of complex financial instruments, including credit default swaps (CDS).

                    </p>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">FOUNDER</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}><p className="accordion-content">Cornelius Vander Starr</p></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">FOUNDED YEAR</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4}><p className="accordion-content">1919</p></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton className="accordion-button">
                      <h2 className="accordion-heading">FACTORS FOR FAILURE</h2>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <ul className="accordion-list">
                      <li className="accordion-list-items">Lack Of Risk Management</li>
                      <li className="accordion-list-items">High Leverage</li>
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="sec5">
        <div className="container">
          <h1 className="about-project">PowerBI Dashboard</h1>  
        </div>
      </section>

      <section className="sec4">
        <div className="container">
          <SimpleGrid columns={3} padding="3" spacingX={200} spacingY={10}>
            {repeatedElements}
          </SimpleGrid>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="text-container">
            <h1>MENTORS</h1>
            <ul>
              <li>Hrishita Shah</li>
              <li>Nandini C</li>
            </ul>
          </div>

          <div className="text-container">
            <h1>Students</h1>
            <ul>
              <li>Aditya</li>
              <li>Hari Hardhik</li>
              <li>Suhas</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
