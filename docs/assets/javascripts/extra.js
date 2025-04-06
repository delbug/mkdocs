/* 自定义JavaScript */

document.addEventListener('DOMContentLoaded', function() {
  // 页面加载完成后的动画效果
  const content = document.querySelector('.md-content');
  if (content) {
    content.style.opacity = '0';
    content.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => {
      content.style.opacity = '1';
    }, 100);
  }

  // 为代码块添加语言标签
  const codeBlocks = document.querySelectorAll('pre code');
  codeBlocks.forEach(block => {
    const className = block.className;
    if (className.startsWith('language-')) {
      const language = className.replace('language-', '');
      const pre = block.parentElement;
      
      // 创建语言标签
      const languageTag = document.createElement('div');
      languageTag.className = 'code-language-tag';
      languageTag.textContent = language;
      pre.insertBefore(languageTag, block);
    }
  });

  // 为表格添加响应式包装器
  const tables = document.querySelectorAll('.md-typeset table');
  tables.forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });

  // 添加返回顶部按钮的平滑滚动
  const backToTop = document.querySelector('.md-top');
  if (backToTop) {
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});