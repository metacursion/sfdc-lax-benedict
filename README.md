# lax-benedict

## Motivation
To separate concerns on larger Lightning applications - use modular approach to call apex controllers via Promise API.

## Principles
Use abstract components that:
1. Hold stateless functions like getErrors, showToast, etc (see laxBenedictCommon)
2. Aggregate common services for the module (see laxBenedictCommonServices)
3. Implement specific interfaces for narrowed scope (see laxBenedictCommonNavigation) or add some attributes here.

## Example
See sample component source.

The basic premise is to be able to easily call apex actions as in:
```
helper
    .services
    .opportunities
    .getById([someId])
    .then()
    .catch()
```
The examples show how to import services into abstract component and where to place stateless helpers.

## Caveats
With LWC you can bypass `lax` package entirely. Have a look in `Call an Apex Method Imperatively` section in LWC docs. I think you can set `@api` method to return the promise from imported apex action.

I prefer to keep my method names title case (`GetAll`) and then JS methods camel case `getAll` - else they mix up and don't work.


## Other
Your lax services can do more than just return value. A common use case I found is to parse JSON returned from external service. Others could be massaging data, or even calling other services.

Lax is salmon in Swedish. Unsure what Ruslan meant by lax in his project, but I figured salmon benedict is a good project name. Plus I had a little attempt called gravalax (which is also type of salmon) - project/POC to automatically generate service components from specified apex classes: https://github.com/metacursion/gravalax


Credit: uses `lax` package from https://github.com/ruslan-kurchenko/sfdc-lax