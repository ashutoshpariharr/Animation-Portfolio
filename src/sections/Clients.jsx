import { useTranslation } from 'react-i18next';
import VelocityScroll from '../components/UI/VelocityScroll.jsx';
import { clientReviews } from '../constants/index.js';

const Clients = () => {
  // Deffineing the translation
  const { t } = useTranslation();

  return (
    <section className="c-space my-20">
      <h3 className="head-text">{t('client_section')}</h3>
      <VelocityScroll
        default_velocity={1}
        className="text-3xl text-white-700 mt-8"
        text={`${t("marqui_text")}`}
      />

      <div className="client-container">
        {clientReviews.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <p className="text-white-800 font-light">{item.review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">{item.position}</p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
