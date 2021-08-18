module.exports = function(eleventyConfig){

  let pug = require("pug");
  eleventyConfig.setLibrary("pug", pug);

  eleventyConfig.addPassthroughCopy("src/app.js");


  return{
    dir:{
      input: "src",
      output: "public"
    }
  }
}
