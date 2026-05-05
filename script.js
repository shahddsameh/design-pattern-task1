// singleton
class Counter {
    static instance = null
    static num = 0

    constructor() {
        if (Counter.instance) {
            return Counter.instance
        }
        
        Counter.instance = this
    }
    increment() {
        ++Counter.num
        return Counter.num
    }
}

const c1 = new Counter()
const c2 = new Counter()
console.log(c1 === c2)
console.log(c1.increment())
console.log(c2.increment())

// prototype
const oldDocument = {
    header: "shahd",
    footer: "sameh",
    pages: 0,
    text: ""
}

const newDocument = {
    ...oldDocument, pages: 1,
    text: "new document created"
}

console.log(newDocument)

// builder
class PizzaBuilder {
  constructor() {
    this.pizza = {}
  }
  size(size) {
    this.pizza.size = size
    return this
  }
  type(type) {
    this.pizza.type = type
    return this
  }
  build() {
    return this.pizza
  }
}

const pizza = new PizzaBuilder()
  .size("large")
  .type("chicken ranch")
  .build()

console.log(pizza)


// abstract factory

class Chores {
    execute (parent) {
        let cooking = parent.doCooking()
        let shopping = parent.doShopping()

        console.log(cooking.cook())
        console.log(shopping.shop())
    }
}
class MomCooking {
    cook () {
        return "good food"
    }
}
class DadCooking {
    cook () {
        return "bad food"
    }
}
class MomShopping {
    shop () {
        return "lots of money spent"
    }
}
class DadShopping {
    shop () {
        return "moderate amount of money spent"
    }
}

class MomHouseChores {
    doCooking() {
        return new MomCooking()
    }
    doShopping() {
        return new MomShopping()
    }
}
class DadHouseChores {
    doCooking() {
        return new DadCooking()
    }
    doShopping() {
        return new DadShopping
    }
}
const chore = new Chores()
const momChore = chore.execute(new MomHouseChores()) 