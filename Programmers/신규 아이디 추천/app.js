let new_id = "...!@BaT#*..y.abcdefghijklm"

solution(new_id);

function solution(new_id){
    let answer = new_id.toLowerCase(); // 1
    answer = answer.replace(/[^\w-._]+/g,''); // 2
    answer = answer.replace(/\.+/g,'.'); // 3
    answer = answer.replace(/^\.+|\.+$/g,''); // 4
    answer.length === 0 && (answer = 'a'); // 5
    answer.length >=16 && (answer = answer.substring(0,15)); // 6
    answer = answer.replace(/\.+$/,'');
    if(answer.length <=2){
        while(answer.length < 3){
            answer = answer.concat(answer[answer.length-1])
        }
    }
    return answer
}


// 모범답안 1

function solution(new_id) {
    const answer = new_id
        .toLowerCase() 
        .replace(/[^\w-_.]/g, '') 
        .replace(/\.+/g, '.') 
        .replace(/^\.|\.$/g, '') 
        .replace(/^$/, 'a') 
        .slice(0, 15).replace(/\.$/, ''); 
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}


// 모범답안 2

const solution = (new_id) => {
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)
        .replace(/^\.|\.$/g, '')        
    return id.padEnd(3, id[id.length-1])
}