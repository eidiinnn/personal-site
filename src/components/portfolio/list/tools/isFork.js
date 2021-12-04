import { BiGitRepoForked } from "react-icons/bi";

export default class isFork {
  static check(yesOrNot) {
    if (yesOrNot === false) return;

    return <BiGitRepoForked />;
  }
}
