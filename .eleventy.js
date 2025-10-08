const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Tell Eleventy to copy the entire styles folder
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("assets");

  // Readable date filter
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .toFormat("LLLL d, yyyy");
  });

   // prefixed URL filter
  //  eleventyConfig.addFilter("prefixedUrl", (url, prefix_ =>
  // });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};