let sidebaropen = false;
const sidebar = document.getElementById("navbar");

function opensidebar(){
  if(!sidebaropen){
    sidebar.classList.add("navbar-responsive");
    sidebaropen = true;
  }
}

function closesidebar(){
  if(sidebaropen){
    sidebar.classList.remove("navbar-responsive");
    sidebaropen = false;
  }
}

const container = document.getElementById('star-container');
  const starCount = 400; // Adjust for density

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${1 + Math.random() * 2}s`;
    star.style.animationDelay = `${Math.random() * 3}s`;

    container.appendChild(star);
  }