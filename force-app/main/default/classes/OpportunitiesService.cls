/**
 * Created by heyoo on 2019-04-25.
 */
public with sharing class OpportunitiesService {
    @AuraEnabled public static Opportunity[] GetAll() {
        return [
                SELECT
                        Id,
                        Name,
                        AccountId
                FROM Opportunity
                LIMIT 10
        ];
    }
}