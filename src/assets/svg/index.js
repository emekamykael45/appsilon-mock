import React from "react";

import { Add } from "./add";
import { Close } from "./close";
import { Company } from "./company";
import { History } from "./history";
import { Logout } from "./logout";
import { Overview } from "./overview";
import { Policy } from "./policy";
import { Report } from "./report";
import { UserAccount } from "./user-account";

const Icon = ({ name }) => {
  switch (name) {
    case "add":
      return <Add />;
    case "close":
      return <Close />;
    case "company":
      return <Company />;
    case "history":
      return <History />;
    case "logout":
      return <Logout />;
    case "overview":
      return <Overview />;
    case "policy":
      return <Policy />;
    case "report":
      return <Report />;
    case "userAccount":
      return <UserAccount />;
    default:
      return <Company />;
  }
};

export default Icon;
