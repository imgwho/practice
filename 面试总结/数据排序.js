function printList(salaryList) {
  var outputObj = {}
  salaryList.map(item => {
    var arr = item.split(' ')
    console.log(arr, item)
    var name1 = arr[3]
    var name2 = arr[2]
    if (!outputObj[name1]) {
      outputObj[name1] = {}
    }
    if (!outputObj[name1][name2]) {
      outputObj[name1][name2] = 0
    }
    outputObj[name1][name2] += +arr[4]
  })
  console.log(outputObj)
  for (department of Object.keys(outputObj)) {
    console.log(department + '工资' + Object.values(outputObj[department]).reduce((x, y) => x + y))
    for (group of Object.keys(outputObj[department])) {
      console.log(department + ' ' + group + '工资' + outputObj[department][group])
    }
  }
}
printList(['test1 id android it 100', 'test1 id2 android it 100', 'test1 id3 android it 100', 'test1 id ios it 100', 'test1 id android hr 100'])