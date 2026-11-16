function  Cal(){
    // get the value from the HTML
    let name = document.getElementById("Name").value
    let m1 = document.getElementById("M1").value
    let m2 =  document.getElementById("M2").value
    let m3 = document.getElementById("M3").value
    let m4 = document.getElementById("M4").value

    //value convertion
    m1 = Number(m1)
    m2 = Number(m2)
    m3 = Number(m3)
    m4 = Number(m4)

    //check valid number or value 
    if(!Number.isFinite(m1) || !Number.isFinite(m2) || !Number.isFinite(m3)|| !Number.isFinite(m4)||
       m1 > 100 || m2 > 100 || m3 > 100 || 0 > m2 || 0 > m3 || 0 > m1){
         alert("Enter valid Mark btw 0 to 100 !")
         return
       }

    // cal total  and avg
    let tot = m1 + m2 +m3 +m4;
    let avg = tot/4;


    let Grade;

    if(tot >= 90){
        Grade = "A"
    }else if(tot >= 80){
        Grade = "B"
    }else if( tot >= 60){
        Grade = "C"
    }else{
        Grade="F"
    }

    //display the value 
    let M = [m1,m2,m3,m4];
    let sub = ""
    let high = ""
    let low = M[0]
    for(let i=0; i < M.length; i++){
        if(M[i]>=35){
            sub += `<p> Subject ${i+1}: ${M[i]}\n --> PASS </p>`
        }else{
            sub += `<p> Subject ${i+1}: ${M[i]}\n --> FAIL</p>`
        }
        if(low >= M[i]){
            low = M[i]
        }
        if(high <= M[i]){
            high = M[i]
        }
        

    }


    document.getElementById("result").innerHTML =
     `<h1>Student Grade Details</h1>\n
     <p> Name: ${name} </p><p> ${sub} </p><p> Average: ${avg.toFixed(2)} </p><p> Total:${tot} </p> 
     <p> Highest Mark: ${high} </p>
     <p> Lowest Mark: ${low} </p>
     <h2 style="color: blue;">Grade: ${Grade}</h2>`

}    
function rest(){
    document.getElementById("boom").reset();
}
