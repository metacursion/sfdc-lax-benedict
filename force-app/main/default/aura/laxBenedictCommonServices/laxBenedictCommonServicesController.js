/**
 * Created by heyoo on 2019-04-25.
 */
({
    init: function (component, event, helper) {
        helper.services.accounts = component.find('AccountsService');
        helper.services.opportunities = component.find('OpportunitiesService');
        helper.services.navigation = component.find('navService');
    }
});