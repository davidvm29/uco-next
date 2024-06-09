import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styles from '../styles/ShareButtons.module.css';

export const ShareButtons = ({shareUrl}) => {
  // const shareUrl = 'https://www.uco.es/';
  const url_produccion = 'https://davidvm29.github.io/uco-next'+ shareUrl
  const title = 'UCO-i02vimod';

  return (
    <div className={styles.shareButtons}>
      <FacebookShareButton url={url_produccion} quote={title}>
        <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
      </FacebookShareButton>
      <TwitterShareButton url={url_produccion} title={title}>
        <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
      </TwitterShareButton>
      <LinkedinShareButton url={url_produccion} title={title}>
        <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
      </LinkedinShareButton>
      <a href={`mailto:?subject=${title}&body=Mi SSG-UCO: ${url_produccion}`} className={styles.iconButton}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
      </a>
    </div>
  );
};
