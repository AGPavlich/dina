

const el = document.getElementsByClassName('menu__list');

for (let i=0; i<el.length; i++) {
    el[i].addEventListener('mouseenter', menuOpen, false);
    el[i].addEventListener('mouseleave', menuClose, false);

}

function menuOpen (e)  {
    if(this.children.length>1) {
       this.children[1].style.height = "auto";
       this.children[1].style.overflow = "visible";
       this.children[1].style.opacity = "1";
    } else {
       return false;
    }
 }

function menuClose (e) {
    if(this.children.length>1) {
      this.children[1].style.height = "0px";
       this.children[1].style.overflow = "hidden";
       this.children[1].style.opacity = "0";
    } else {
       return false;
    }
}


