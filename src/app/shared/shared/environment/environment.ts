export const environment = {
    production: false,
    // apiSwaggerUrl: "http://localhost:44317/",
    apiUrl: "https://localhost:7138/",
    user:
    {
      addurl: '/adduser',
      updateurl:'updateuser/',
      listurl: 'userlist/',
      adduser: 'adduser'
    },
    userRole:
    {
      addurl: '/adduserrole',
      updateurl:'updateuserrole/',
      listurl: 'userrolelist/',
    },
    userRoleMapping:
    {
      addurl: '/adduserrolemapping',
      updateurl:'updateuserrolemapping/',
      listurl: 'userrolemappinglist/',
    }
  }