import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

const iconMap = {
  ai: PsychologyOutlinedIcon,
  api: ApiOutlinedIcon,
  aptitude: QuizOutlinedIcon,
  clarity: TipsAndUpdatesOutlinedIcon,
  cloud: CloudQueueOutlinedIcon,
  code: CodeOutlinedIcon,
  communication: RecordVoiceOverOutlinedIcon,
  crm: ManageAccountsOutlinedIcon,
  custom: AppsOutlinedIcon,
  design: DesignServicesOutlinedIcon,
  ecommerce: ShoppingCartOutlinedIcon,
  erp: AccountTreeOutlinedIcon,
  fullstack: DataObjectOutlinedIcon,
  growth: AutoGraphOutlinedIcon,
  hr: ForumOutlinedIcon,
  internship: WorkOutlineOutlinedIcon,
  job: BusinessCenterOutlinedIcon,
  linkedin: LinkedInIcon,
  mern: StorageOutlinedIcon,
  mobile: PhoneIphoneOutlinedIcon,
  mock: FactCheckOutlinedIcon,
  node: TerminalOutlinedIcon,
  placement: HandshakeOutlinedIcon,
  practice: RocketLaunchOutlinedIcon,
  python: CodeOutlinedIcon,
  react: WebOutlinedIcon,
  referrals: Diversity3OutlinedIcon,
  resume: AssignmentOutlinedIcon,
  software: DataObjectOutlinedIcon,
  sql: StorageOutlinedIcon,
  support: SupportAgentOutlinedIcon,
  technical: CodeOutlinedIcon,
  training: SchoolOutlinedIcon,
  trust: SecurityOutlinedIcon,
  verified: VerifiedOutlinedIcon,
  webapp: WebOutlinedIcon,
  website: LanguageOutlinedIcon,
  workspace: WorkspacePremiumOutlinedIcon,
  team: GroupsOutlinedIcon,
};

export default function IconBadge({ icon = 'verified', size = 'md' }) {
  const Icon = iconMap[icon] || VerifiedOutlinedIcon;

  return (
    <span className={`icon-badge icon-badge-${size}`} aria-hidden="true">
      <Icon fontSize="inherit" />
    </span>
  );
}
