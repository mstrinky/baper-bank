document.getElementById('deposit-amount').addEventListener('click',function(){
  const depositInput=document.getElementById('deposit-input');
  const depositAmount=depositInput.value ;
 const depositTotal=document.getElementById('deposit-total');
 depositTotal.innerText=depositAmount;
 depositInput.value='';
})