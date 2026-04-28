1. This will print 3. i is defined with var, so it is accessible outside of the loop. After the i=2 iteration of the loop, i gets incremented to 3, fails the loop check, and so the loop terminates.
2. This will log 150, the last declared value of discountedPrice. No error because it is a var and available outside its declared scope.
3. This will also log 150, since it rounds discounted price to 2 decimal places.
4. This will return the array [50, 100, 150], which are the discounted prices rounded to two decimal values.
5. This will throw an error because the let keyword only lets i be accessible within its scope, which is the for loop.
6. This will throw an error because the let keyword only lets discountedPrice be accessible within its scope, which is the for loop.
7. This will log 150 since it is still in the finalPrice scope. The last value initialized to final price was 150.
8. This will return the array [50, 100, 150], which are the discounted prices rounded to two decimal values.
9. This code will error out since it is out of the scope of i.
10. This will log 3 since it is still in the scope of length.
11. This will return the array [50, 100, 150], which are the discounted prices rounded to two decimal values.
12. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. A. '32' The integer is casted to a string.
    B. 1 The string is casted to an int.
    C. 3 Null is treated as 0
    D. '3null' null is treated as a string 'null'
    E. '3undefined' undefined is treated as a string 'undefined'
    F. NaN JS is unable to subtract two strings.
14. A. true. JS compares the number values 2 and 1
    B. false. '2' is before '12' alphabetically.
    C. true. JS compares the number values 2 and 2.
    D. 2 === '2'. JS compares the types as well. Since they are different types, it returns false.
    E. false. true is casted into the integer 1.
    F. true. Boolean(2) converts 2 into true.
15. == compares two objects after trying to convert them to the same type. === also checks if the types are the same.
16. This will return [2, 4, 6] because it iterates through each item in the input array, applies the callback function, which in this case doubles the value, and pushes the result to a new array which is returned.
17. 1432. JS handles synchronous tasks first, then asynchronous.
