function solution(x) {
    let result = x;
    while ( x%7 != 0) {
        x++;
        result *= x;    
    }
    return result;
}
