/**
 * Created by heyoo on 19/01/19.
 */
({
    getErrors: function (errors) {
        var messages = [];
        var helper = this;
        if (errors) {
            var errata = Array.isArray(errors) ? errors : errors.entries;
            if (errata) {
                errata.forEach(function (i) {
                    if (i.message) {
                        messages.push(i.message);
                    }
                    if (i.pageErrors && i.pageErrors.length > 0) {
                        messages = [].concat(messages, helper.getErrors(i.pageErrors));
                    }
                    if (i.fieldErrors) {
                        messages = [].concat(
                            messages,
                            helper.getErrors(
                                [].concat.apply(
                                    [],
                                    Object
                                        .keys(i.fieldErrors)
                                        .map(function (key) {
                                            return i.fieldErrors[key];
                                        })
                                )
                            )
                        );
                    }
                });
            } else if (errors.message) {
                messages.push(errors.message);
                if (errors.stackTrace) {
                    messages.push(errors.stackTrace);
                }
            }
        }
        return messages;
    },
    reportUserError: function (title, msg) {
        var toastEvent = $A.get("e.force:showToast");
        if (toastEvent !== undefined) {
            toastEvent.setParams({
                "title": title || "Unknown error",
                "message": msg || "Unknown reason",
                "type": "error",
                "mode": "sticky"
            });
            toastEvent.fire();
        }
    },
});