type Drink = {
    beverage: string,
    volume: number,
    unit: string,
    percentage: number,
    color: Color
}

type Beverage = Drink & { time: string}

type Unit = "ml" | "cl" | "dl" | "l";