# lax-benedict

## Motivation
To separate concerns on larger Lightning applications - use modular approach to call apex controllers via Promise API.

## Principles
Use abstract components that:
1. Hold stateless functions like getErrors, showToast, etc (see laxBenedictCommon)
2. Aggregate common services for the module (see laxBenedictCommonServices)
3. Implement specific interfaces for narrowed scope (see laxBenedictCommonNavigation) or add some attributes here.

## Example
See sample component source

## Caveats
With LWC you can bypass `lax` package entirely. Have a look in `Call an Apex Method Imperatively` section in LWC docs.

I prefer to keep my method names title case (`GetAll`) and then JS methods camel case `getAll` - else they mix up and don't work.

Credit: uses `lax` package from https://github.com/ruslan-kurchenko/sfdc-lax