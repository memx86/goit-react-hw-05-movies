import { useEffect, useState } from "react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import PropTypes from "prop-types";
import IconButton from "components/IconButton";
import s from "./NavButtons.module.css";

function NavButtons({ top, bottom }) {
  const [isShownTop, setIsShownTop] = useState(false);
  const [isShownBottom, setIsShownBottom] = useState(false);
  useEffect(() => {
    if (!top || !bottom) return;
    const handleObserve = (entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
          if (target === top) {
            setIsShownTop(false);
            return;
          }
          if (target === bottom) {
            setIsShownBottom(false);
            return;
          }
        } else {
          if (target === top) {
            setIsShownTop(true);
            return;
          }
          if (target === bottom) {
            setIsShownBottom(true);
            return;
          }
        }
      });
    };
    const observer = new IntersectionObserver(handleObserve, {
      threshold: 0,
    });
    observer.observe(top);
    observer.observe(bottom);
    return () => {
      observer.unobserve(top);
      observer.unobserve(bottom);
    };
  }, [bottom, top]);
  const goTop = () => {
    top.scrollIntoView({ behavior: "smooth" });
  };
  const goBottom = () => {
    bottom.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={s.container}>
      {isShownTop && (
        <IconButton icon={<AiOutlineUp />} role="up" onClick={goTop} />
      )}
      {isShownBottom && (
        <IconButton icon={<AiOutlineDown />} role="down" onClick={goBottom} />
      )}
    </div>
  );
}
NavButtons.propTypes = {
  top: PropTypes.object.isRequired,
  bottom: PropTypes.object.isRequired,
};
export default NavButtons;
