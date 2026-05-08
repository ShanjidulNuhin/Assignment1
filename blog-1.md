Blog 1: Why is any a “Type Safety Hole” and Why is unknown the Safer Choice in TypeScript?

Introduction
TypeScript is popular because it adds type safety to JavaScript.
It helps developers catch errors before running the code. But TypeScript also provides some special types like any and unknown.
In this blog, we will understand:

Why any is dangerous
Why unknown is safer
What is type narrowing
How TypeScript protects us from runtime errors

any can store any type of data. It get zero protection. If you use any, typeScript turn off all checking. because of that having typescript is pointless.

unknown do  not store any type of data. if i do not assign a type of a value unknown will do not know the type. so check the value first and then use it.

Type Narrowing means, taking a broad type and gradually narrowing it down to a specific. It is the key to using the unkown. always chek first, then use it.
