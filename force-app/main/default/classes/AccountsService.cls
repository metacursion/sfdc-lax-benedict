/**
 * Created by heyoo on 2019-04-25.
 */
public with sharing class AccountsService {
    @AuraEnabled public static Account[] GetByIds(Id[] ids) {
        return [
                SELECT
                        Id,
                        Name
                FROM Account
                WHERE
                        Id = :ids
        ];
    }
    @AuraEnabled public static Account[] GetAll() {
        return [
                SELECT
                        Id,
                        Name
                FROM Account
                LIMIT 10
        ];
    }
}