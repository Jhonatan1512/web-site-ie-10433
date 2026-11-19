import {
  MdMenuBook,
  MdStar,
  MdHandshake,
  MdFavorite,
  MdTrackChanges,
  MdVisibility,
  MdSupervisorAccount,
  MdSchool,
  MdEmojiEvents,
  MdSportsSoccer,
  MdLocationOn,
  MdSchedule,
  MdPhoneAndroid,
  MdChat,
  MdFacebook,
} from "react-icons/md";

const ICON_MAP = {
  study: MdMenuBook,
  discipline: MdStar,
  work: MdHandshake,
  respect: MdFavorite,
  mission: MdTrackChanges,
  vision: MdVisibility,
  director: MdSupervisorAccount,
  teacher: MdSchool,
  trophy: MdEmojiEvents,
  sports: MdSportsSoccer,
  location: MdLocationOn,
  schedule: MdSchedule,
  phone: MdPhoneAndroid,
  chat: MdChat,
  facebook: MdFacebook,
};

export function MaterialIcon({ name, size = 22, className = "" }) {
  const IconComponent = ICON_MAP[name];
  if (!IconComponent) return null;

  return <IconComponent size={size} className={className} aria-hidden="true" />;
}

export default MaterialIcon;