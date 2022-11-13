#include<iostream>
using namespace std;
class Complex 
{
    int real,imag;
    public:
        Complex(int r=0,int i=0)
        {
            real=r;
            imag=i;
        }
    Complex operator+ (Complex const &obj)
    {
        Complex res;
        res.real=real+obj.real;
        res.imag=imag+obj.imag;
        return res;
    }
    Complex operator* (Complex const &mul)
    {
        Complex res1;
        res1.real=(real*mul.real)-(imag*mul.imag);
        res1.imag=(real*mul.real)+(imag*mul.real);
        return res1;
    }
void print()
{
    cout<<real<<"+"<<imag<<"i"<<endl;
}
};
int main(){
    Complex c1(5,10),c2(9,11);
    Complex c3=c1+c2;
    Complex c4=c1*c2;
    c3.print();
    c4.print();
    return 0;
}