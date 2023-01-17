const button = document.querySelector('button');

const link = document.querySelector('.link');

button.addEventListener('click',()=>{
    console.log('hello');
});

link.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log('hello');
});