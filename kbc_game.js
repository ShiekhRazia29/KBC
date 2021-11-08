var readline=require("readline-sync");
console.log("Welcome to Kon Banega crorepati!");
var question_list = [
    "How many continents are there?",              //pehla question
    "What is the capital of India?",            //doosra question
    "NG mei kaun se course padhaya jaata hai?"    //teesra question
]

var options_list = [
   
    ["Four", "Nine", "Seven", "Eight"],
   ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
   ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]

// har ek question ke liye, uski solution key (yeh index nahi hai)
var solution_list = [3, 4, 1]
var answer_list=[[2,3],[3,4],[2,1]]
amount_earned=0
count=0
function kbc_game(){
    serial=0
    for(var i in question_list){
        serial+=1
        console.log("Your question is:\n",serial,question_list[i]);
        var serial_no=0;
        console.log("Your options for the given question are:");
        for( var j in options_list[i]){
            serial_no+=1
            console.log(serial_no,options_list[i][j]);
        }
           var lifeline=readline.question("Do you want lifeline:")
            if(lifeline =="yes"){
                if(count<1){
                    console.log(answer_list[i]);
                    count=count+1
                    var user_choice2=readline.question("Enter your selected option:")
                    if(user_choice2 == answer_list[i][1]){
                        amount_earned=amount_earned+20000
                        console.log("Congratulations! your Answer is right.\n You have earned",amount_earned);
                       
                    }else{
                        console.log("Your answer is not correct");
                        break
                    }
            }   else{
                console.log("You have already used your lifeline.");
            
                }
            }else{
                var answer=readline.question("Enter your Answer:")
                if(answer==solution_list[i]){
                    amount_earned+=20000;
                    console.log(" Congrates! Correct answer.\n you have earned",amount_earned);
                }else{
                    console.log("Sadly the answer is not correct.");
                    break
                }
            }    

        


        
    }
}
kbc_game()
var personal_option=readline.question("Do you want to continue:");
if(personal_option =="no"){
    console.log("Thanks for playing.You earned",amount_earned );


}else{
    kbc_game()
}