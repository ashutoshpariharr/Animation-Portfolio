import { useTranslation } from "react-i18next";

const Footer = () => {

  const {t} = useTranslation()

  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>{t("footer_term")}</p>
        <p>|</p>
        <p>{t("footer_policy")}</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/ashutoshpariharr" target="_blank">
          <div className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a href="https://x.com/Ashutos19713007" target="_blank">
          <div className="social-icon">
            <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/ashutosh-parihar-110916281/" target="_blank">
          <div className="social-icon">
            <img src="/assets/linkedin.svg" alt="instagram" className="w-1/2 h-1/2 bg-white" />
          </div>
        </a>
      </div>

      <p className="text-white-500">{`© ${new Date().getFullYear()} Ashutosh Parihar. ${t("reserved_text")}.`}</p>
    </footer>
  );
};

export default Footer;
