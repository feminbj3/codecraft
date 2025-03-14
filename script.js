document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const htmlEditor = document.getElementById('html-editor');
  const cssEditor = document.getElementById('css-editor');
  const jsEditor = document.getElementById('js-editor');
  const resultFrame = document.getElementById('result-frame');
  const tabs = document.querySelectorAll('.tab');
  const editorPanes = document.querySelectorAll('.editor-pane');
  const btnRun = document.getElementById('btnRun');
  const btnSave = document.getElementById('btnSave');
  const btnLoad = document.getElementById('btnLoad');
  const btnClear = document.getElementById('btnClear');
  const refreshResult = document.getElementById('refreshResult');
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notification-message');
  const lastUpdate = document.getElementById('last-update');
  const autoSaveStatus = document.getElementById('auto-save-status');
  
  // Line numbers
  const htmlLineNumbers = document.getElementById('html-line-numbers');
  const cssLineNumbers = document.getElementById('css-line-numbers');
  const jsLineNumbers = document.getElementById('js-line-numbers');
  
  // Variables
  let autoSaveInterval;
  let lastSaved = new Date();
  
  // Initialize
  updateLineNumbers(htmlEditor, htmlLineNumbers);
  updateLineNumbers(cssEditor, cssLineNumbers);
  updateLineNumbers(jsEditor, jsLineNumbers);
  runCode();
  startAutoSave();
  
  // Tab switching
  tabs.forEach(tab => {
      tab.addEventListener('click', () => {
          const tabName = tab.getAttribute('data-tab');
          
          // Update active tab
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          
          // Update active pane
          editorPanes.forEach(pane => pane.classList.remove('active'));
          document.getElementById(`${tabName}-pane`).classList.add('active');
      });
  });
  
  // Editor events
  htmlEditor.addEventListener('input', () => {
      updateLineNumbers(htmlEditor, htmlLineNumbers);
      updateLastEditTime();
  });
  
  cssEditor.addEventListener('input', () => {
      updateLineNumbers(cssEditor, cssLineNumbers);
      updateLastEditTime();
  });
  
  jsEditor.addEventListener('input', () => {
      updateLineNumbers(jsEditor, jsLineNumbers);
      updateLastEditTime();
  });
  
  // Button events
  btnRun.addEventListener('click', runCode);
  btnSave.addEventListener('click', saveProject);
  btnLoad.addEventListener('click', loadProject);
  btnClear.addEventListener('click', clearEditors);
  refreshResult.addEventListener('click', runCode);
  
  // Functions
  function runCode() {
      const html = htmlEditor.value;
      const css = cssEditor.value;
      const js = jsEditor.value;
      
      const frameContent = `
          <!DOCTYPE html>
          <html>
          <head>
              <style>${css}</style>
          </head>
          <body>
              ${html}
              <script>${js}<\/script>
          </body>
          </html>
      `;
      
      const frame = resultFrame;
      frame.contentWindow.document.open();
      frame.contentWindow.document.write(frameContent);
      frame.contentWindow.document.close();
      
      showNotification('Code executed successfully!', 'success');
  }
  
  function updateLineNumbers(editor, lineNumbersElement) {
      const lines = editor.value.split('\n');
      const lineCount = lines.length;
      
      let lineNumbersHTML = '';
      for (let i = 1; i <= lineCount; i++) {
          lineNumbersHTML += i + '<br>';
      }
      
      lineNumbersElement.innerHTML = lineNumbersHTML;
      
      // Adjust line numbers height to match editor content
      lineNumbersElement.style.height = editor.scrollHeight + 'px';
  }
  
  function startAutoSave() {
      autoSaveStatus.classList.add('auto-save');
      
      autoSaveInterval = setInterval(() => {
          saveToLocalStorage();
      }, 30000); // Auto save every 30 seconds
  }
  
  function saveToLocalStorage() {
      const projectData = {
          html: htmlEditor.value,
          css: cssEditor.value,
          js: jsEditor.value,
          lastEdited: new Date().toISOString()
      };
      
      localStorage.setItem('codecraftProject', JSON.stringify(projectData));
      lastSaved = new Date();
      updateLastEditTime();
      showNotification('Project auto-saved', 'success');
  }
  
  function loadFromLocalStorage() {
      const savedProject = localStorage.getItem('codecraftProject');
      
      if (savedProject) {
          const projectData = JSON.parse(savedProject);
          
          htmlEditor.value = projectData.html || '';
          cssEditor.value = projectData.css || '';
          jsEditor.value = projectData.js || '';
          
          updateLineNumbers(htmlEditor, htmlLineNumbers);
          updateLineNumbers(cssEditor, cssLineNumbers);
          updateLineNumbers(jsEditor, jsLineNumbers);
          
          lastSaved = new Date(projectData.lastEdited);
          updateLastEditTime();
          
          showNotification('Project loaded from local storage', 'success');
          runCode();
          return true;
      }
      
      return false;
  }
  
  function saveProject() {
      saveToLocalStorage();
      showNotification('Project saved successfully!', 'success');
  }
  
  function loadProject() {
      if (!loadFromLocalStorage()) {
          showNotification('No saved project found', 'warning');
      }
  }
  
  function clearEditors() {
      if (confirm('Are you sure you want to clear all editors? This cannot be undone.')) {
          htmlEditor.value = '';
          cssEditor.value = '';
          jsEditor.value = '';
          
          updateLineNumbers(htmlEditor, htmlLineNumbers);
          updateLineNumbers(cssEditor, cssLineNumbers);
          updateLineNumbers(jsEditor, jsLineNumbers);
          
          runCode();
          updateLastEditTime();
          showNotification('All editors cleared', 'warning');
      }
  }
  
  function updateLastEditTime() {
      const now = new Date();
      const diff = Math.floor((now - lastSaved) / 1000); // Difference in seconds
      
      if (diff < 60) {
          lastUpdate.textContent = `${diff} seconds ago`;
      } else if (diff < 3600) {
          lastUpdate.textContent = `${Math.floor(diff / 60)} minutes ago`;
      } else {
          lastUpdate.textContent = `${Math.floor(diff / 3600)} hours ago`;
      }
  }
  
  function showNotification(message, type = 'info') {
      // Clear any existing timeout
      if (window.notificationTimeout) {
          clearTimeout(window.notificationTimeout);
      }
      
      // Update message and show notification
      notificationMessage.textContent = message;
      notification.className = `notification ${type}`;
      notification.classList.add('show');
      
      // Hide after 3 seconds
      window.notificationTimeout = setTimeout(() => {
          notification.classList.remove('show');
      }, 3000);
  }
  
  // Try to load previous project on start
  loadFromLocalStorage();
  
  // Update timestamp every minute
  setInterval(updateLastEditTime, 60000);
  
  // Handle keyboard shortcuts
  document.addEventListener('keydown', e => {
      // Ctrl+S or Cmd+S to save
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
          e.preventDefault();
          saveProject();
      }
      
      // Ctrl+Enter or Cmd+Enter to run code
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runCode();
    }
});

// Handle textarea tab key
const handleTabKey = (e, editor) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        
        // Insert 4 spaces at cursor position
        editor.value = editor.value.substring(0, start) + '    ' + editor.value.substring(end);
        
        // Move cursor position after the inserted spaces
        editor.selectionStart = editor.selectionEnd = start + 4;
    }
};

htmlEditor.addEventListener('keydown', e => handleTabKey(e, htmlEditor));
cssEditor.addEventListener('keydown', e => handleTabKey(e, cssEditor));
jsEditor.addEventListener('keydown', e => handleTabKey(e, jsEditor));

// Handle textarea scrolling with line numbers
const handleScroll = (editor, lineNumbers) => {
    lineNumbers.scrollTop = editor.scrollTop;
};

htmlEditor.addEventListener('scroll', () => handleScroll(htmlEditor, htmlLineNumbers));
cssEditor.addEventListener('scroll', () => handleScroll(cssEditor, cssLineNumbers));
jsEditor.addEventListener('scroll', () => handleScroll(jsEditor, jsLineNumbers));
});