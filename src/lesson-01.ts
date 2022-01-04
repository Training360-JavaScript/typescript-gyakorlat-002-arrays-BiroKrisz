export default class calculator {
    // A változókat az osztályon belül így hozhatod létre.
    active: boolean = false;

    // Hozd létre a következő változókat a megfelelő típusannotációval.

    /** @type {Array} points - számok tömbje, 1-től 10-ig egyesével. */
    points: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    /** 
     * A tömb minden eleme legyen egy objektum, amely egy felhasználót reprezentál.
     * Kötelező elemek: name<string>, email<string>.
     * Inicializáld a tömböt, legyen legalább két eleme.
     * @type {Array} users - minden elem egy felhasználó.
     */
    users: Array<{ name: string, email: string }> = [
        {
            name: 'Citrom Cecília',
            email: 'citrom@citromail.hu'
        },

        {
            name: 'Narancs Noémi',
            email: 'narancs@narancsmail.hu'
        }
    ]

    /** 
     * A tömb minden eleme legyen egy objektum, amely egy terméket reprezentál.
     * Kötelező elemek: name<string>, price<number>, stock<number>.
     * Opcionális elemek: active<boolean>.
     * Inicializáld a tömböt, legyen legalább két eleme.
     * @type {Array} products - minden elem egy termék.
     */
    products: Array<{ name: string, price: number, stock: number, active?: boolean }> = [
        {
            name: 'mangó',
            price: 1900,
            stock: 2,
        },
        {
            name: 'kukorica',
            price: 2100,
            stock: 10,
            active: true
        }
    ]

    /** 
     * Inicializálj egy tuple típust, azaz adj neki értéket is.
     * @type {Tuple} role - number, string, boolean. 
     */
    role: [number, string, boolean] = [
        99,
        'kivi',
        false
    ]
}
