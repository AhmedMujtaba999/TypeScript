const score: Array<number> =[]
const names : Array<string> = []

function identityOne(val: boolean| number): boolean | number {
    return val
}

function identity(val: any): any{ // take number as input and return string so this can be possibel with any 
    return val  
}

function identityTwo<T>( val : T): T{ // generics
    return val
}

function identityThree<type>(val : type): type{ // take number (type) as input and return that type only 
    return val
}

identityThree("hello") // string 
identityThree(7) // number
identityTwo(false) // boolean 


interface boole{
    brand: string,
    type: number}

    identityThree<boole>({brand: "hi", type: 78})// object paasing 

    function getSearchProducts<T>(products: T[]): T{ 
        // do some database oper
        const myIndex = 3
        return products[myIndex]

    }

    const getMoreSearchProducts = <T,> (products: T[]): T =>{ // generics as datatype in arrow function 

        const myIndex = 4
        return products[myIndex]

    }


    interface dabase{
        connection: string,
        username: string, 
        pwd: string
    }
    function anfunc<T, U extends dabase >(val1: T, val2: U): object {
        return {
            val1, val2
        }

    }

    //anfunc(3,"5")
    anfunc(3, {connection: "hi", username: "ahmed", pwd: "hukm"})


    interface Quiz{
        name: string, 
        type: string,

    }

    interface Course{
        name: string, 
        author: string, 
        subject: string
    }

    class Sellable< Course> {
        public cart: Course[] =[]
        
        addToCart(products: Course){
            this.cart.push(products)
        }
    }