type Drink = {
    beverage: string,
    volume: string,
    unit: Unit,
    percentage: string,
    color: Color
}

type Beverage = Drink & { time: string}

type Unit = "ml" | "cl" | "dl" | "l";