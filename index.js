    let Value="X";
    let b=true;
    let arr1=[];
    let arr2=[];
    let result="";



    let winning_possible_combinations=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    function check_winner(str)
    {
        let flag=true;

        for(let i=0;i<winning_possible_combinations.length;i++)
        {
            
            // console.log(winning_possible_combinations[i][j]);

            let single_array=winning_possible_combinations[i];

            
                
            if(str=="X"){
            let count1=0;  
                for(let l of arr1){
                
                    if(single_array.includes(l))
                    {
                        count1++;
                        if(count1==3)
                        {
                            alert("X is winner");
                            flag=false;

                
                            reset()
                        }
                    }
                }
            }
            
                if(str=="O")
                {
                let count2=0;
                for(let l of arr2)
                {
                    if(single_array.includes(l))
                    {
                        count2++;
                        if(count2==3)
                        {
                            alert("O is winner");
                            flag=false;
        
                            reset();
                        }
                    }
                }  
               
        
            }
            
            if(x_count+o_count==9 && flag==true)
            {
                alert("draw");
                reset();
            }
    }

    }


    let x_count=0;
    let o_count=0;
    function mark(id)
    {

        let box=document.getElementById(id);
        if(b==true){
        box.innerHTML="X";
        let element=document.getElementById("element");
        element.innerHTML="O";
        id=parseInt(id);
        arr1.push(id);
        x_count++;
        b=false;
        if(x_count>=3)
        {
        check_winner("X");
        }
    
        }
        else
        {
            b=true;
            id=parseInt(id);
            arr2.push(id);
            box.innerHTML="O";
            let element=document.getElementById("element");
            element.innerHTML="X"
            o_count++;
            if(o_count>=3)
            {
                check_winner("O");
            }

        }

    }


    function reset()
    {
        for(i=0;i<=8;i++)
        {
            let resetbox=document.getElementById(i);
            resetbox.innerHTML="";
        }
        arr1=[];
        arr2=[];
        x_count=0;
        o_count=0;
        b=true;
        let element=document.getElementById("element");
        element.innerHTML="X";
    }