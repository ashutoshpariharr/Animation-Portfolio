import * as THREE from 'three';
import Globe from 'react-globe.gl';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

import Button from '../components/Button.jsx';
import { iconSlugs } from '../constants/index.js';
import IconCloud from '../components/UI/IconCloud.jsx';
import { useTranslation } from 'react-i18next';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const {t} = useTranslation();

  const handleCopy = () => {
    navigator.clipboard.writeText('ashutoshparihar512@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const globeRef = useRef();

  useEffect(() => {
    const globe = globeRef.current;

    if (globe) {
      const rotate = () => {
        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 0.5;
      };

      rotate();
    }
  }, []);

  useEffect(() => {
    const globe = globeRef.current;

    if (globe) {
      const scene = globe.scene();

      const material = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.7, transparent: true });
      const points = [];

      points.push(new THREE.Vector3(-100, 0, 0));
      points.push(new THREE.Vector3(100, 0, 0));

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);

      scene.add(line);

      const animateRay = () => {
        line.rotation.z += 0.01;
        requestAnimationFrame(animateRay);
      };

      animateRay();
    }
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Ashutosh Parihar</p>
              <p className="grid-subtext">
                With 1.5 years of experience, I have honed my skills in both frontend and backend dev, as well as in
                DBMS, python, devops etc. creating dynamic and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            {/* <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" /> */}
            <IconCloud iconSlugs={iconSlugs} />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <motion.div
              className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </motion.div>

            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">
                I&apos;m based in freelancing projects, Croatia and open to remote work worldwide
              </p>
              <a href="#contact">
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              {/* <p className="grid-headtext">My Passion for Coding</p> */}
              <p className="grid-headtext">{t("welcome")}</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
              <p className="grid-subtext mt-4">
                Dynamic Full Stack Developer with over 1.5 year of experience delivering innovative and scalable web
                solutions. Proven track record of leading cross-functional teams, enhancing user engagement by 70%, and
                optimizing system performance. Passionate about learning and applying modern technologies, with 20+
                projects completed. Continuously advancing skills through Udemy and self-driven learning
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-1xl md:text-xl font-medium text-gray_gradient text-white">
                  ashutoshparihar512@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
