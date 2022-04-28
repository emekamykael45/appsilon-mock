import Reports from "../pages/reports/reports";

const OverviewPage = () => <div>Overview Page</div>;
const PolicyPage = () => <div>Policy Page</div>;
const CompanyPage = () => <div>Company Page</div>;
const UserAccountPage = () => <div>User Account Page</div>;
const HistoryPage = () => <div>History Page</div>;

const userRoutes = [
  {
    icon: "overview",
    label: "Overview",
    to: "/overview",
    component: OverviewPage,
  },
  {
    icon: "policy",
    label: "Policy",
    to: "/policy",
    component: PolicyPage,
  },
  {
    icon: "report",
    label: "Reports",
    to: "/reports",
    component: Reports,
  },
  {
    icon: "company",
    label: "Company",
    to: "/company",
    component: CompanyPage,
  },
  {
    icon: "userAccount",
    label: "User Account",
    to: "/user-account",
    component: UserAccountPage,
  },
  {
    icon: "history",
    label: "History",
    to: "/history",
    component: HistoryPage,
  },
];

export default userRoutes;
