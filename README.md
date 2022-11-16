# Project Euler 058 - Spiral Primes

Starting with 1 and spiralling anticlockwise in the following way, a square spiral with side length 7 is formed.

    37 36 35 34 33 32 31
    38 17 16 15 14 13 30
    39 18  5  4  3 12 29
    40 19  6  1  2 11 28
    41 20  7  8  9 10 27
    42 21 22 23 24 25 26
    43 44 45 46 47 48 49

It is interesting to note that the odd squares lie along the bottom right diagonal, but what is more interesting is that 8 of the 13 numbers lying along both diagonals are prime; that is, a ratio of 8/13 = 62%.

If one complete new layer is wrapped across the spiral above, a square spiral with side length 9 will be formed.  If the process is continued, what is the side length of the square spiral for which the ratio of primes along both diagonals first falls below `percent`?

Information at [Project Euler 058](https://projecteuler.net/problem=58)

## UX

**User Stories**

As a user, I expect the function `spiralPrimes(50)` to return a number.

As a user, I expect the function `spiralPrimes(50)` to return 11.

As a user, I expect the function `spiralPrimes(15)` to return 981.

As a user, I expect the function `spiralPrimes(10)` to return 26241.

User Stories on function `spiralPrimes(percent)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 058](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-58-spiral-primes)

**Information Architecture**

The function `spiralPrimes(percent)` returns a number, where `percent` is a number between 10 and 62.

