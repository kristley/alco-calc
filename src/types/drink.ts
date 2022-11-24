type Drink = {
    beverage: string,
    volume: string,
    unit: string,
    percentage: string,
    color: Color
}

type Beverage = Drink & { time: string}

type Unit = "ml" | "cl" | "dl" | "l";