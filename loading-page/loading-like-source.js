var r = document.querySelector('circle');
var css_var = getComputedStyle(r);
var radius = css_var.getPropertyValue('--r');
var per = css_var.getPropertyValue('--p');
console.log(radius);
console.log(typeof radius);
console.log(radius*6);
console.log(typeof (radius*6));
console.log(per);
