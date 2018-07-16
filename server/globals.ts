import something from './game';
console.log(something);

declare module NodeJS  {
    interface Global {
        BASE_PATH: any
    }
}
// global.BASE_PATH = 'client/dist/fortniteleague';

export default 5;