const menuTrigger = document.getElementById('menu-trigger');
      const menuBox = document.getElementById('menu-box');
    
      menuTrigger.addEventListener('click', function() {
        if (menuBox.style.display === 'block') {
          menuBox.style.display = 'none';
        } else {
          menuBox.style.display = 'block';
        }
      });
    
      // Close the menu if clicked outside
      document.addEventListener('click', function(event) {
        if (!menuBox.contains(event.target) && event.target !== menuTrigger) {
          menuBox.style.display = 'none';
        }
      });