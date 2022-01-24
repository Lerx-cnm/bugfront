import { publicDecrypt } from "crypto"

export default function encrypt(data, key){
    /** Create duplicate of data (amongus => aammoonngguuss)
    using ID/Key, sum gets devided by 6(164075/6) then gets rounded, 
    while making duplicates they get modified through the caesar cipher based on the return of the division
    (amongus => abmnopnoghuvst),
    with the new string, replace the element relative to key with alph relative to key
    operation complete?**/

    const alph= { 'A':1,'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8,'I':9,'J':10,
    'K':11,'L':12,'M':13,'N':14,'O':15,'P':16,'Q':17,'R':18,'S':19,'T':20,'U':21,
    'V':22,'W':23,'Y':24,'X':25,'Z':26, '!':27, '_':28, '#':29, '1':30, '3':31, '5':32, '7':33, '9': 34, '0':35 }


    const num1= 6

    let parData = data.toUppderCase().split('')
    for (let i = 0; i<parData.length; i++){
        const ind = parData[i]
        const indMod =  alph[ind]
        parData.splice(i, 0, ind)
    }


}

// export function genSalt(){

// }
export function genGroupID(){
    return Math.floor(100000 + Math.random() * 900000)
    //make sure that there isnt any duplicates in the backend
    // groupid gen in backend for ease of comparison and consulting?
}
export function decrypt(data, key){

}