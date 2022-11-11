'use strict'
function tut2()
{
    let cont=false;
    do
    {
        console.clear;
        let type = prompt('Enter H,V,D');
        let StringN=prompt( 'Enter Num Of elements' );
        const N = Number.parseInt(StringN)
        let m = '' ;
        switch(type.toUpperCase())
        {
            case 'H':
                console.log('Horizontal line :\n')
                for (let i=0; i<N;i++)
                {
                    m += '*';
                }
                console.log(m);
            
                break;
            case 'V':
                console.log('Vertical line : \n')
                for (let i=0; i<N;i++)
                {
                    m += '*\n';
                }
                console.log(m)
                break;
            case 'D':
                console.log('Diagonal line : \n')
                for (let i=0; i<N; i++)
                {
                    for( let j=i; j<i*2; j++)
                    {
                        m += ' ';
                    }
                    m += '*\n'; 
                }
                console.log(m);
                break;
            default:
                console.error('you pick invalide type .')
        }
        cont = confirm('do you want to draw another line ??')
    }
    while(cont);
}
