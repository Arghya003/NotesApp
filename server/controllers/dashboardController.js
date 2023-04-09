// get dashboard

exports.homepage = async (req, res) => {
  const locals = {
    title: "DashBoard",
    description: "Create your Notes hassle free ",
  };
  res.render("dashboard/index", {
    locals,
    layout: "../views/layouts/dashboard",
  });
};

