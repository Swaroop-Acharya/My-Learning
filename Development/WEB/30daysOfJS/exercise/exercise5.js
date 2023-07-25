const companies=["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]


function hasMoreO(company){
    let count=0;
    for(let i=0;i<company.length;i++){
        
        if(company[i] === 'o' ){
            count++;
        }
    }
    if(count>1){
        return true;
    }else{
        return false;
    }
}

function filterMethod(array){
    const res=[]
    
    for(let i=0;i<array.length;i++){
        if(hasMoreO(array[i])){
            res.push(array[i]);
        }
    }
    return res
}

const solution=filterMethod(companies);
console.log(solution)