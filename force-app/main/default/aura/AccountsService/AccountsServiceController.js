/**
 * Created by heyoo on 2019-04-25.
 */
({
    getByIds: function(component, event, helper) {
        return component.lax.enqueue('c.GetByIds', event.getParam('arguments'));
    },
    getAll: function(component, event, helper) {
        return component.lax.enqueue('c.GetAll');
    },
})