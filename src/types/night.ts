type Night = {
    id: number;
    date: string; // todo: is this strictly necessary? could just get it from drinks
    drinks: Drink[]; // this might be a performance issue down the line
}