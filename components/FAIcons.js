import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faDev,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const DevTo = () => getFontAwesomeIcon(faDev);
export const Twitter = () => getFontAwesomeIcon(faTwitter);
export const Github = () => getFontAwesomeIcon(faGithub);
export const Linkedin = () => getFontAwesomeIcon(faLinkedin);
export const ExternalLink = () => getFontAwesomeIcon(faExternalLinkAlt);

export const getFontAwesomeIcon = (faIcon, className) => (
  <FontAwesomeIcon icon={faIcon} className={className} />
);
