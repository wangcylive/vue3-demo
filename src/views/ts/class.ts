@testable(false)
@testablePro
class MyTestClass {
  static isTestable: boolean
  isTestable: boolean | undefined
}
function testable(bool: boolean) {
  return function(target: any) {
    target.isTestable = bool
  }
}
function testablePro(target: any) {
  target.prototype.isTestable = true
}

console.log(MyTestClass.isTestable)

const myTest1 = new MyTestClass()
console.log(myTest1.isTestable)
