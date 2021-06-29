function produceMarkdown(userResponse, userInfo) {
    return `
  
  ## ${userResponse.title}
  ![Badge for gitHub repo top language](https://img.shields.io/github/languages/top/${userResponse.repoUserName}/${userResponse.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponse.repoUserName}/${userResponse.repo}?style=flat&logo=appveyor)
  
  ## Table of Content
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[licenses](#licenses)
  -[contribution](#contribution)
  -[test](#test)
  -[questions](#questions)
  -[username](#username)
  
  ## Description:
  ${userResponse.description}
      
  ## Installation:
  ${userResponse.installation}
      
  ## Usage:
  ${userResponse.usage}
      
  ## Licenses:
  ![Badge for gitHub repo license](https://img.shields.io/badge/license-${userResponse.licenses}-green) 
      
  ## Contribution:
  ${userResponse.contributing}
      
  ## Test:
  ${userResponse.test}
      
  ## Questions?
  Contact below  
  ![Developer Profile Picture](${userInfo.avatar_url}) 

  ## Username:
  ${userResponse.repoUserName}

  ## Email:
  ${userResponse.email} 

  ## GitHub: 
  [@${userInfo.login}](${userInfo.url})
  Check out the badges hosted by [shields.io](https://shields.io/), all badges accredited to them
  `;
  }
  
  module.exports = produceMarkdown;