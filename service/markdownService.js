// import marked from "marked"; // 引入marked
// import hljs from "highlight.js"; // 引入 highlight.js
var marked = require('marked');
var hljs = require('highlight.js');



const markdownService = {
    convert(source) {
        const rendererMD = new marked.Renderer();
        marked.setOptions({
            renderer: rendererMD,
            highlight(code) {
                return hljs.highlightAuto(code).value;
            },
            pedantic: false,
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false,
            langPrefix: "hljs language-"
        });
        const time = new Date().getTime();
        const result = marked(source); // 将markdown内容解析
        console.log(new Date().getTime() - time);
        return result
    }
}

module.exports = markdownService

