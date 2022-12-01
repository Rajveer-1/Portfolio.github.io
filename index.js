var typed=new Typed(".auto-type",{
    strings:["My name is Rajveer Singh","I am Web developer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true,
        })
        let entry=document.getElementById('entry')
        // console.log(about.innerHTML);
        let button=document.getElementsByTagName('button');
        entry.innerText=" ";
        let contain=document.getElementById('containers')
        for(let i=0;i<5;i++){
           
                
              button[i].addEventListener('click', function onClick() {
                  console.log(button[i].innerHTML);
                 
                  if(button[i].innerHTML==="About"){
                    let div=' '
                    div +='I am from Ahmedgarh. Now i am pursuing my B.Tech course at Guru Nanank Dev Engineering College'
                   entry.innerHTML=div;
                   contain.style.display='none';

                }

                else if(button[i].innerHTML==="Qualification"){
                    entry.innerText="";
                    contain.style.display='block';
                }
                else if(button[i].innerHTML==="Hobbies"){
                
                    let div=' '
                    div +='My hooby is playing Football and watching movies. I have an interest in competitive coding and Web Development';
                   entry.innerHTML=div;
                   contain.style.display='none';

                }
                else if(button[i].innerHTML==="Skills and Achievements"){
                    let div=' '
                    div +='I got a Ist prize in Presentation at College level. I have some basic Knowledge of web development,Java ,BootStrap,Node js';

                   entry.innerHTML=div;
                   contain.style.display='none';

                }
                else if(button[i].innerHTML==="Aim"){
                    let div=' '
                    div +='My aim is to get job in Google ';
                   entry.innerHTML=div;
                   contain.style.display='none';

                }
                
               
                })

            }
     