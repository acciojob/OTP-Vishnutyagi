
document.addEventListener("DOMContentLoaded", () => {
	const inp=document.querySelectorAll('.code');
	inp[0].focus();
	// const codes = document.querySelectorAll('.code');
	inp.forEach((txt,index)=>{
		txt.addEventListener('input',(e)=>{
			if(e.target.value.length===1&&index<inp.length-1){
				inp[index+1].focus();
			}
		});
	
		txt.addEventListener('keydown', (e)=>{
			if(e.key=="Backspace"&&index>0&&e.target.value==''){
				inp[index - 1].focus();
			}
		});
		
	});
});
// // script.js
// document.addEventListener("DOMContentLoaded", () => {
//     const codes = document.querySelectorAll('.code');
    
//     codes.forEach((code, index) => {
//         code.addEventListener('input', (e) => {
//             if (e.target.value.length === 1 && index < codes.length - 1) {
//                 codes[index + 1].focus();
//             }
//         });

//         code.addEventListener('keydown', (e) => {
//             if (e.key === 'Backspace' && index > 0 && e.target.value === '') {
//                 codes[index - 1].focus();
//             }
//         });
//     });
// });
