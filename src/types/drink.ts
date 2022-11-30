type Beverage = {
    name: string,
    volume: string,
    unit: Unit,
    percentage: string,
    color: Color
}

type Drink = {
    name: string,
    volume: number,
    unit: Unit,
    percentage: number,
    color: Color,
    time: string
}

type Unit = "ml" | "cl" | "dl" | "l";