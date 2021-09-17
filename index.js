document.getElementById('Shop Product').style.display= 'block';
document.getElementById('shoptab').style.color="#F84343";
document.getElementById('shoptab').style.textDecoration="underline";



 function openShop() {
   document.getElementById('About Creator').style.display= 'none';
   document.getElementById('Shop Product').style.display= 'block';
 }

 function openAbout() {
  document.getElementById('shoptab').style.color="";
  document.getElementById('shoptab').style.textDecoration="";

  document.getElementById('Shop Product').style.display= 'none';
  document.getElementById('About Creator').style.display= 'block';
}