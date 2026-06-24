// fibonacci sequence

 a = 0
 b = 1

 for (i=1;i<=10; i++) {
    let next = a + b ;

    console.log(next)

    a = b
    b = next
 }

 