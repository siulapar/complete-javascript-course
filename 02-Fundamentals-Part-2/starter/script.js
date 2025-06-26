const jonas = {
    firstName: 'Jeff',
    lastName: 'Wong',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age
    },

    getSummary: function () {
        this.summary = `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he ${this.hasDriversLicense ? 'has' : 'doesn\'t have'} a driver's license.`
        return this.summary
    }
}

console.log(jonas.getSummary())
