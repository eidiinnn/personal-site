export default class Github {
  static async createRepositoriesWithDetailsList(userName, RepositoriesNameList) {
    const toBeReturned = {
      requisitionsStatus: { allFail: false, failNumber: 0 },
      list: [],
    };

    for (const repositoryName of RepositoriesNameList) {
      await fetch(`https://api.github.com/repos/${userName}/${repositoryName}`)
        .then((res) => res.json())
        .then((githubResponse) => {
          if (!githubResponse.id) toBeReturned.requisitionsStatus.failNumber += 1;
          else toBeReturned.list.push(githubResponse);
        });
    }

    if (toBeReturned.requisitionsStatus.failNumber === RepositoriesNameList.length)
      toBeReturned.requisitionsStatus.allFail = true;

    return Promise.resolve(toBeReturned);
  }
}
