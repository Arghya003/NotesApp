// get homepage


exports.homepage= async(req,res)=>{
    
      const locals = {
        title: "Notes App",
        description: "Create your Notes hassle free ",
      };
      res.render("index", locals);
    
}

exports.about=async(req,res)=>{
    const locals={
        title:'about page',
        description:"welcome to about"
    }
    res.render('about',{
      locals,
      layout : '../views/layouts/front-page'
      
    })
}