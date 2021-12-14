import { BiGitRepoForked } from "react-icons/bi";

export default class IsFork {
  static check(yesOrNot) {
    if (yesOrNot === false) return;
    else return <BiGitRepoForked />;
  }
}
