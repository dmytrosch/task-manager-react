import styles from "./progressChart.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function ModalWindow({ children, onClose }) {
  const closeModal = (e) => {
    if (e.target.nodeName === "DIV") onClose();
  };
  return (
    <div
      onClick={(e) => closeModal(e)}
      className={classNames(styles.lightbox, styles.jsLightbox, styles.isOpen)}
    >
      <div className={styles.lightboxOverlay}></div>
      <div className={styles.lightboxContent}>
        {children}
        <button
          onClick={onClose}
          type="button"
          className={styles.lightboxButton}
        ></button>
      </div>
    </div>
  );
}

ModalWindow.propTypes = {
  children: PropTypes.object,
  onClose: PropTypes.func,
};
