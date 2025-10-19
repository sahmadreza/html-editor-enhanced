window.MathJax = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
  },
  svg: { fontCache: "global" },
};

function renderMathInElement(content = null) {
  MathJax.typesetPromise([document.querySelector('.note-editable')]);
}
