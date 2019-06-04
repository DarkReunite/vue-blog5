import hljs from 'highlight.js';

export default function() {
    let blocks = document.querySelectorAll('pre code');
    blocks.forEach(block => {
        hljs.highlightBlock(block);
    });
}
