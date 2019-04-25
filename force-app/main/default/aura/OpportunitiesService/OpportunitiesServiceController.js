/**
 * Created by heyoo on 2019-04-25.
 */
({
    getAll: function(component, event, helper) {
        return component.lax.enqueue('c.GetAll');
    }
});