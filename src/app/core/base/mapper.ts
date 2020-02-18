export abstract class Mapper<I, O> {
    abstract mapFrom(param: I): O;
    abstract mapListFrom(param: I): Array<O>;
    abstract mapTo(param: O): I;
}