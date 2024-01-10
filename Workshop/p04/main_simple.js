// Create a class for the element
class Square extends HTMLElement {
  
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    const div = document.createElement('div');
    const style = document.createElement('style');
    shadow.appendChild(style);
    shadow.appendChild(div);
  }

  show() {
	  console.log('Custom square element SHOW.');
	  myshow(this);
  }

  hide() {
	console.log('Custom square element HIDE.');
	myhide(this);
  }
 
}

/*  start MAIN */

var square;

const hide = document.querySelector('.hide');
const show = document.querySelector('.show');
square = document.createElement('custom-square');
customElements.define('custom-square', Square); //!!!
document.body.appendChild(square);

/* end MAIN */


function myshow(elem) {
  const shadow = elem.shadowRoot;
  shadow.querySelector('style').textContent = `
    div {
      width: 100px;
      height: 100px;
	  background-color: rgb(255,0,0)};
	  visibility: 'visible';
    }
  `;
}

function myhide(elem) {
  const shadow = elem.shadowRoot;
  shadow.querySelector('style').textContent = `
    div {
      width: 100px;
      height: 100px;
      visibility: 'hidden';
    }
  `;
}



hide.onclick = function() {
  square.hide();
  //add.disabled = true;
};


show.onclick = function() {
	
	if (typeof square === "undefined") {
		square = document.createElement('custom-square');
		document.body.appendChild(square);
	}
	
	square.show();
};

