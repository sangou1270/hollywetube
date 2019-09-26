import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password != password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // TO DO : 유저 등록
    // TO DO : 유저 로그인
    res.redirect(routes.home);
  }
};
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "UserDetail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
