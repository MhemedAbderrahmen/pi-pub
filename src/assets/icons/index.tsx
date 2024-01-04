import { SvgImage } from "../../components/SvgImage";
import Chart from "./chart.svg";
import Cloudadd from "./cloudadd.svg";
import Envelope from "./envelope.svg";
import Fax from "./fax.svg";
import Lock from "./lock.svg";
import Marker from "./marker.svg";
import More from "./more.svg";
import Phone from "./phone.svg";
import Quote from "./quote.svg";
import Lickcircle from "./tickcircle.svg";
import Upload from "./upload.svg";
type IconType = {
  size?: number;
};
const MoreIcon: React.FC<IconType> = ({ size }) => (
  <SvgImage size={size} src={More} alt="More icon" />
);
const LockIcon: React.FC<IconType> = ({ size }) => (
  <SvgImage size={size} src={Lock} alt="Lock icon" />
);
const UploadIcon: React.FC<IconType> = ({ size }) => (
  <SvgImage size={size} src={Upload} alt="Upload icon" />
);
const QuoteIcon: React.FC<IconType> = ({ size }) => (
  <SvgImage size={size} src={Quote} alt="Quote icon" />
);
const CloudaddIcon: React.FC<IconType> = ({ size }) => (
  <SvgImage size={size} src={Cloudadd} alt="Cloudadd icon" />
);
const ChartIcon: React.FC<IconType> = ({ size }) => (
  <SvgImage size={size} src={Chart} alt="Chart icon" />
);
const LickcircleIcon: React.FC<IconType> = ({ size }) => (
  <SvgImage size={size} src={Lickcircle} alt="Lickcircle icon" />
);
const EnvelopeIcon: React.FC<IconType> = ({ size }) => (
  <SvgImage size={size} src={Envelope} alt="Envelope icon" />
);
const PhoneIcon: React.FC<IconType> = ({ size }) => (
  <SvgImage size={size} src={Phone} alt="Phone icon" />
);
const MarkerIcon: React.FC<IconType> = ({ size }) => (
  <SvgImage size={size} src={Marker} alt="Marker icon" />
);
const FaxIcon: React.FC<IconType> = ({ size }) => (
  <SvgImage size={size} src={Fax} alt="Fax icon" />
);
export {
  ChartIcon,
  CloudaddIcon,
  EnvelopeIcon,
  FaxIcon,
  LickcircleIcon,
  LockIcon,
  MarkerIcon,
  MoreIcon,
  PhoneIcon,
  QuoteIcon,
  UploadIcon,
};
