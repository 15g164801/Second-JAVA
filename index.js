function assignGrade(num1){
  if (num1>= 90){
    return 'A'
  } else if (num1>= 60){
    return 'B'
  } else if (num1>= 60){
    return 'B'
  } else if (num1>= 40){
    return 'C'
  } else if (num1>= 20){
    return 'D'
  } else {
    return 'FAIL'
  }
}
console.log (assignGrade(10))