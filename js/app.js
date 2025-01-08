const packType=document.querySelectorAll('.pack_type ul li');

packType.forEach(pack=>{
    pack.addEventListener('click',item=>{

        packType.forEach(i=>{
            i.classList.remove('clicked')
        });
        item.target.classList.add('clicked')
    })
})