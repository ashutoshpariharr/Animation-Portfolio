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

  const { t } = useTranslation();

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
              <p className="grid-headtext">{t('about_text')}</p>
              <p className="grid-subtext">{t('about_description')}</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            {/* <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" /> */}
            <IconCloud iconSlugs={iconSlugs} />

            <div>
              <p className="grid-headtext">{t('skills_text')}</p>
              <p className="grid-subtext">{t('skills_description')}</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <motion.div
              className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}>
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
              <p className="grid-headtext">{t('skills_globe')}</p>
              <p className="grid-subtext">
                {/* I&apos;m based in freelancing projects, Croatia and open to remote work worldwide */}
                {t('globe_description')}
              </p>
              <a href="#contact">
                <Button name={t("contact_me")} isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              {/* <p className="grid-headtext">My Passion for Coding</p> */}
              <p className="grid-subtext">{t('about_passions_codings')}</p>
              <p className="grid-subtext mt-4">
                {t("about_passion_description")}
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
              <p className="grid-subtext text-center">{t("contact_me")}</p>
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
