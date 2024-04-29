var pipe1 = document.querySelector('.water-tank-1 img');
        var pipe2 = document.querySelector('.water-tank-2 img');
        var pipe3 = document.querySelector('.water-tank-3 img');

        var pip1 = document.querySelector('.pipe-water-1');
        var pip2 = document.querySelector('.pipe-water-2');
        var pip3 = document.querySelector('.pipe-water-3');

        var interval1
        var interval2
        var interval3

        var flow1=false
        var flow2=false
        var flow3=false

        var tankWater1=document.querySelector('.tank-1-Water')
        var tankWater2=document.querySelector('.tank-2-Water')
        var tankWater3=document.querySelector('.tank-3-Water')

        var containerHeight=document.querySelector('.tank-water')
        var tankHeight=0;



        pipe1.addEventListener("click", function() {
            if (pip1.style.display === "block") {
                pip1.style.display = "none";
            } else {
                pip1.style.display = "block";
            }

            if(!flow1){
                flow1=true
                var currentHeight=parseFloat(getComputedStyle(tankWater1).height)
                interval1=setInterval(function(){
                    currentHeight-=1
                    tankWater1.style.height=currentHeight+"px";
                    tankHeight+=0.2;
                    containerHeight.style.height=tankHeight+"px";
                    if(currentHeight<0){
                        clearInterval(interval1)
                        tankWater1.style.display="none"
                        pip1.style.display="none"
                        flow1=false;
                    }
                },20)  
            }
                    else{
                        clearInterval(interval1)
                        flow1=false;
                    }
   
        })

        pipe2.addEventListener("click", function() {
            if (pip2.style.display === "block") {
                pip2.style.display = "none";
            } else {
                pip2.style.display = "block";
            }
            if(!flow2){
                flow2=true
                var currentHeight=parseFloat(getComputedStyle(tankWater2).height)
                interval2=setInterval(function(){
                    currentHeight-=1
                    tankWater2.style.height=currentHeight+"px";
                    tankHeight+=0.2;
                    containerHeight.style.height=tankHeight+"px";
                    if(currentHeight<0){
                        clearInterval(interval2)
                        tankWater2.style.display="none"
                        pip2.style.display="none"
                        flow2=false;
                    }
                },20)  
            }
                    else{
                        clearInterval(interval2)
                        flow2=false;
                    }
   
        })

        pipe3.addEventListener("click", function() {
            if (pip3.style.display === "block") {
                pip3.style.display = "none";
            } else {
                pip3.style.display = "block";
            }
            if(!flow3){
                flow3=true
                var currentHeight=parseFloat(getComputedStyle(tankWater3).height)
                interval3=setInterval(function(){
                    currentHeight-=1
                    tankWater3.style.height=currentHeight+"px";
                    tankHeight+=0.2;
                    containerHeight.style.height=tankHeight+"px";
                    if(currentHeight<0){
                        clearInterval(interval3)
                        tankWater3.style.display="none"
                        pip3.style.display="none"
                        flow3=false;
                    }
                },20)  
            }
                    else{
                        clearInterval(interval3)
                        flow3=false;
                    }
   
        })
