export class Tag{
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly TYPESCRIPT = new Tag('TypeScript','darkred');
    static readonly PYTHON = new Tag('Python','brown');
    static readonly CSHARP = new Tag('C#','green');
    static readonly JAVA = new Tag('JAVA','orange');
    static readonly NODEJS = new Tag('NodeJS','brown');
    static readonly JAVASCRIPT = new Tag('JavaScript','orange');
    static readonly REACT = new Tag('React','purple');
    static readonly MySQL = new Tag('MySQL','orange');
    static readonly AWS = new Tag('AWS','Blue');
    static readonly API = new Tag('API','grey');
    static readonly Bootstrap = new Tag('Bootstrap','teal');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}