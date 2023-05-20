// control-button
var btn_pre = document.getElementById('previous');
var btn_next = document.getElementById('next');
//variable in root
var cube = document.getElementById('cube');
var root = document.querySelector(':root');
var css_variable = getComputedStyle(root);
var deg = css_variable.getPropertyValue('--deg-now');
var rotate_half = css_variable.getPropertyValue('--rotate-half');
var rotate_full = css_variable.getPropertyValue('--rotate-full');
//make sure animation time = delay add class
var delay = css_variable.getPropertyValue('--delay-animation');
    delay = Number(delay.replace('s',''))*1000;
    
//await function
function waitforme(millisec) {
  return new Promise(resolve => {
      setTimeout(() => { resolve('') }, millisec);
  })
}


async function Previous() {
  //calculate 
  deg = Number(deg.replace('deg',''));                          //string to Number
  rotate_half = deg + 45 + 'deg';
  rotate_full = deg + 90 + 'deg';
  deg += 'deg';

  //send back to root
  root.style.setProperty('--deg-now', `${deg}`);
  root.style.setProperty('--rotate-half', `${rotate_half}`);
  root.style.setProperty('--rotate-full', `${rotate_full}`);

  cube.classList.add("switch-scale");                           //add class
  await waitforme(delay);                                       //delay
  deg = rotate_full;                                            //update new position
  cube.classList.remove("switch-scale");                        //remove class
}
async function Next() {
  deg = Number(deg.replace('deg',''));                          //string to Number
  rotate_half = deg - 45  + 'deg';
  rotate_full = deg - 90  + 'deg';
  deg += 'deg';

  root.style.setProperty('--deg-now', `${deg}`);
  root.style.setProperty('--rotate-half', `${rotate_half}`);
  root.style.setProperty('--rotate-full', `${rotate_full}`);

  cube.classList.add("switch-scale");                           //add class
  await waitforme(delay);                                       //delay
  deg = rotate_full;                                            //update new position
  cube.classList.remove("switch-scale");                        //remove class
}

btn_next.addEventListener('click', Next);
btn_pre.addEventListener('click', Previous);

