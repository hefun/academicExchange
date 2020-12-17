var LOADIP = "http://182.92.223.226";
let Ip = {
  productIP: LOADIP + "/",
};
let path = {
  website: {
    //个人工作台
    login: Ip.productIP + "user/login",
    register: Ip.productIP + "user/register",
    getUserInfo: Ip.productIP + "getUserInfo",
    alterPassword: Ip.productIP + "alterPassword",
    uploadUserImage: Ip.productIP + "uploadUserImage",
    updateUserImgPath: Ip.productIP + "updateUserImgPath",
    updateUserInfo: Ip.productIP + "updateUserInfo",
    getUserQuestionByUsername: Ip.productIP + "getUserQuestionByUsername",
    setPassword: Ip.productIP + "setPassword",
    isEmailUsed: Ip.productIP + "user/emailUsed",
    isNameUsed: Ip.productIP + "user/nameUsed",
    userVerify: Ip.productIP + "user/verify",
    scholarVerify: Ip.productIP + "user/toBeScholar",
    getInfo: Ip.productIP + "user/getInfo",
    
    //检索
    searchProject: Ip.productIP + "scholarship/advancedSearchProject",
    searchProjectSortByDate: Ip.productIP + "scholarship/advancedSearchProjectSortByDate",
    searchPatent: Ip.productIP + "scholarship/advancedSearchPatent",
    searchPatentSortByDate: Ip.productIP + "scholarship/advancedSearchPatentSortByDate",
    searchPaper: Ip.productIP + "scholarship/advancedSearchPaper",
    searchPaperSortByDate: Ip.productIP + "scholarship/advancedSearchPaperSortByDate",
    searchPaperSortByCitation: Ip.productIP + "scholarship/advancedSearchPaperSortByCitationCount",
    getProjectById: Ip.productIP + "scholarship/getProjectById/",
    getPatentById: Ip.productIP + "scholarship/getPatentByPatentId/",
    getPaperById: Ip.productIP + "scholarship/getPaperByPaperId/",

    //获取学者门户下属数据库门户
    getScholarBelong: Ip.productIP + "scholar/Scholar_DataScholar/",

    //获取学术成果已认领人员
    getScholarByPaper: Ip.productIP + "scholarship/getWhoClaimIt/",

    //申诉列表
    getAppeal: Ip.productIP + "message/admin/appeal/all/",
    updateAppeal: Ip.productIP + "message/admin/appeal/one/", 

    //通过id获取数据库门户信息
    getScholarByID: Ip.productIP + "scholar/dataScholar/",

    //通过学者ID查询学者
    getRealScholarByID: Ip.productIP + "scholar/admin/Search/",

    //认退领项目
    renlingProg: Ip.productIP + "scholarship/claimProject/",
    disrenlingProg: Ip.productIP + "scholarship/backClaimProject/",
    renlingProgAm: Ip.productIP + "scholarship/manageClaimProject/",
    disrenlingProgAm: Ip.productIP + "scholarship/manageBackClaimProject/",

    //认退领专利
    renlingPatent: Ip.productIP + "scholarship/claimPatent/",
    disrenlingPatent: Ip.productIP + "scholarship/backClaimPatent/",
    renlingPatentAm: Ip.productIP + "scholarship/manageClaimPatent/",
    disrenlingPatentAm: Ip.productIP + "scholarship/manageBackClaimPatent/",

    //查询项目、专利是否被认领
    haveRenling: Ip.productIP + "scholarship/getHaveClaim/",

    //学者
    getSameNameScholar: Ip.productIP + "scholar/sameName",
    subscribe: Ip.productIP + "scholar/subscribe",
    undoSubscribe: Ip.productIP + "scholar/subscribe",
    getScholarInfo: Ip.productIP + "scholar",
    editScholarInfo: Ip.productIP + "scholar",
    claimDataPortal: Ip.productIP + "scholar/scholar_dataScholar",
    undoClaimDataPortal: Ip.productIP + "scholar/scholar_dataScholar",
  },
};
export default path;
