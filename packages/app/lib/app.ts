import '@problem/pkg3';

/** press cmd+.  , this is the expected usage, which works with auto import */
const v1: IInterfaceInPkg1 = {a: 'aaa'};
console.log(v1);

/** press cmd+.  , this type CAN NOT be auto imported in vscode */
const v2: IInterfaceInPkg2 = {b: 'bbb'};
console.log(v2);

/** press cmd+.  , this type can be auto imported correctly when its module is already referenced */
const v3: IInterfaceInPkg4 = {c: 'ccc'};
console.log(v2);

/** press cmd+.  , the 3rd party packages works fine */
const v4 = partition([1, 2, 3, 4], n => n % 2);
console.log(v4);