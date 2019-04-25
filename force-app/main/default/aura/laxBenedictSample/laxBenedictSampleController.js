/**
 * Created by heyoo on 19/01/19.
 */
({
    init: function (component, even, helper) {
        component.set('v.showSpinner', true);
        helper
            .services
            .opportunities
            .getAll()
            .then(function (opps) {
                var oppNames = opps
                    .map(function (i) {
                        return i.Name;
                    })
                    .join(', ');
                component.set('v.opportunities', oppNames);
                var accountIds = opps
                    .map(function (i) {
                        return i.AccountId;
                    });
                return helper.services.accounts.getByIds(accountIds);
            })
            .then(function (accs) {
                var accNames = accs
                    .map(function (i) {
                        return i.Name;
                    })
                    .join(', ');
                component.set('v.accounts', accNames);
            })
            .catch(function (reason) {
                helper.reportUserError(
                    'Failed to retrieve accounts or opportunities',
                    helper.getErrors(reason).join('\n'));
            })
            .then(function () {
            //    hide spinner even if there was exception
                component.set('v.showSpinner', false);
            })
    }
});