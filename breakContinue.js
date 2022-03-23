const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if(x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if(y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

//testando a formatação do console.log
for(let i = 0; i <= 10; i++){
    console.log(`${i} == ${i}`)
}