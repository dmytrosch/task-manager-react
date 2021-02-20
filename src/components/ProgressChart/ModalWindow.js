import styles from "./progressChart.module.css";
import classNames from "classnames";

export default function ModalWindow({ children, onClose }) {
  return (
    <div
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
