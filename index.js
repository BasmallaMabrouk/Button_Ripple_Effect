const btnEL =document.querySelector(".btn"); 
/* The Document method querySelector() returns the first Element within the document that matches the specified selector
 or group of selectors. 
If no matches are found, null is returned.*/
btnEL.addEventListener("mouseover",(event)=>{ 
    /* triggers when the mouse pointer enters the div element, and its child elements.
     The mouseenter event is only triggered when the mouse pointer enters the div element
    The onmousemove event triggers every time the mouse pointer is moved over the div element.*/
    const x=(event.pageX - btnEL.offsetLeft);
const y=(event.pageX - btnEL.offsetTop); 
/*The HTMLElement.offsetLeft read-only property returns the number of pixels that
 the upper left corner of the current element is offset to the left within the*/
 btnEL.style.setProperty("--xpos",x+"px")
btnEL .style.setProperty("--ypos",y,+"px")
/*The CSSStyleDeclaration.setProperty() method interface sets a new value for a property on a CSS
 style declaration object.*/
});